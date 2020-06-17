package kr.co.teamfresh.cpft.capi.controller.v1;

import java.util.Collections;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import kr.co.teamfresh.cpft.capi.advice.exception.CPasswordNotMatchedException;
import kr.co.teamfresh.cpft.capi.advice.exception.CUserEmailDuplicatedException;
import kr.co.teamfresh.cpft.capi.advice.exception.CUserLoginIdDuplicatedException;
import kr.co.teamfresh.cpft.capi.advice.exception.CUserNotFoundException;
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
		User user = userJpaRepo.findByUserLoginId(id).orElseThrow(CUserNotFoundException::new);
		if (!passwordEncoder.matches(password, user.getPassword()))
			throw new CPasswordNotMatchedException();

		return responseService.getSingleResult(jwtTokenProvider.createToken(String.valueOf(user.getUserSeq()), user));

	}

	@ApiOperation(value = "가입", notes = "회원가입을 한다.")
	@PostMapping(value = "/signup")
	public CommonResult signin(@ApiParam(value = "회원ID : 이메일", required = true) @RequestParam String id,
			@ApiParam(value = "비밀번호", required = true) @RequestParam String password,
			@ApiParam(value = "이름", required = true) @RequestParam String name,
			@ApiParam(value = "이메일", required = true) @RequestParam String email) {

		Optional<User> userLoginIdCheck = userJpaRepo.findByUserLoginId(id);
		if(userLoginIdCheck.isPresent()) {
			throw new CUserLoginIdDuplicatedException();
		}
		Optional<User> userEmailCheck = userJpaRepo.findByUserEmail(email);
		if(userEmailCheck.isPresent()) {
			throw new CUserEmailDuplicatedException();
		}
		userJpaRepo.save(User.builder().userLoginId(id).userLoginPw(passwordEncoder.encode(password)).userNm(name).userEmail(email)
				.roles(Collections.singletonList("ROLE_USER")).build());
		User user = userJpaRepo.findByUserLoginId(id).orElseThrow(CPasswordNotMatchedException::new);
		return responseService.getSingleResult(jwtTokenProvider.createToken(String.valueOf(user.getUserSeq()), user));
	}

	@ApiOperation(value = "로그인", notes = "이메일 회원 로그인을 한다.")
	@PostMapping(value = "/logout")
	public CommonResult logout() {
		return responseService.getSuccessResult();

	}
}