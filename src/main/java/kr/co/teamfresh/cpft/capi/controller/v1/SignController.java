package kr.co.teamfresh.cpft.capi.controller.v1;

import java.util.Collections;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import kr.co.teamfresh.cpft.capi.advice.exception.CEmailSigninFailedException;
import kr.co.teamfresh.cpft.capi.config.security.JwtTokenProvider;
import kr.co.teamfresh.cpft.capi.entity.User;
import kr.co.teamfresh.cpft.capi.model.response.CommonResult;
import kr.co.teamfresh.cpft.capi.model.response.SingleResult;
import kr.co.teamfresh.cpft.capi.repo.UserJpaRepo;
import kr.co.teamfresh.cpft.capi.service.ResponseService;
import lombok.RequiredArgsConstructor;

@Api(tags = { "1. Sign" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class SignController {

	private final UserJpaRepo userJpaRepo;
	private final JwtTokenProvider jwtTokenProvider;
	private final ResponseService responseService;
	private final PasswordEncoder passwordEncoder;

	@ApiOperation(value = "로그인", notes = "이메일 회원 로그인을 한다.")
	@PostMapping(value = "/signin")
	public SingleResult<String> signin(@ApiParam(value = "회원ID : 이메일", required = true) @RequestParam String id,
			@ApiParam(value = "비밀번호", required = true) @RequestParam String password) {
		User user = userJpaRepo.findByUserLoginId(id).orElseThrow(CEmailSigninFailedException::new);
		if (!passwordEncoder.matches(password, user.getPassword()))
			throw new CEmailSigninFailedException();

		return responseService
				.getSingleResult(jwtTokenProvider.createToken(String.valueOf(user.getUserSeq()), user.getRoles()));

	}

	@ApiOperation(value = "가입", notes = "회원가입을 한다.")
	@PostMapping(value = "/signup")
	public CommonResult signin(@ApiParam(value = "회원ID : 이메일", required = true) @RequestParam String id,
			@ApiParam(value = "비밀번호", required = true) @RequestParam String password,
			@ApiParam(value = "이름", required = true) @RequestParam String name) {

		userJpaRepo.save(User.builder().userLoginId(id).userLoginPw(passwordEncoder.encode(password)).userNm(name)
				.roles(Collections.singletonList("ROLE_USER")).build());
		return responseService.getSuccessResult();
	}
}