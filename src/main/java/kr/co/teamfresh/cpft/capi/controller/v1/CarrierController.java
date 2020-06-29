package kr.co.teamfresh.cpft.capi.controller.v1;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import kr.co.teamfresh.cpft.capi.advice.exception.CAuthenticationEntryPointException;
import kr.co.teamfresh.cpft.capi.config.security.JwtTokenProvider;
import kr.co.teamfresh.cpft.capi.entity.Carrier;
import kr.co.teamfresh.cpft.capi.model.response.SingleResult;
import kr.co.teamfresh.cpft.capi.service.ResponseService;
import kr.co.teamfresh.cpft.capi.service.carrier.CarrierService;
import lombok.RequiredArgsConstructor;

@Api(tags = { "6. Carrier" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/carrier")
public class CarrierController {
	Logger logger = LoggerFactory.getLogger(CarrierController.class);
	private final ResponseService responseService;
	private final CarrierService carrierService;
	private final JwtTokenProvider jwtTokenProvider;

	@ApiImplicitParams({
			@ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@GetMapping
	public SingleResult<Carrier> findCarrier(@RequestHeader("X-AUTH-TOKEN") String token) {
		try {
			Map carrier = jwtTokenProvider.getCarrier(token);
			if (carrier != null) {

				return responseService.getSingleResult(carrierService.findCarrier(String.valueOf(carrier.get("carrierSeq"))));
			} else {
				logger.info("인증 토큰이 유효하지 않습니다." + token);
				throw new CAuthenticationEntryPointException("인증 토큰이 유효하지 않습니다.");
			}
		} catch (Exception e) {
			logger.error(e.getMessage());
			logger.error("인증 토큰이 유효하지 않습니다." + token);
			throw new CAuthenticationEntryPointException("인증 토큰이 유효하지 않습니다.");
		}
		/*
		 * Authentication authentication = jwtTokenProvider.getAuthentication(token);
		 * 
		 * 
		 * if (!(authentication instanceof AnonymousAuthenticationToken)) { return
		 * responseService.getSingleResult(carrierService.findCarrier(((User)
		 * authentication.getPrincipal()).getCarrier().getCarrierSeq())); }else {
		 * logger.error("인증 토큰이 유효하지 않습니다." +token); throw new
		 * CAuthenticationEntryPointException("인증 토큰이 유효하지 않습니다."); }
		 */
	}
}
