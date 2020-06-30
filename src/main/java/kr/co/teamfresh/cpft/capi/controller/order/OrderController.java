package kr.co.teamfresh.cpft.capi.controller.order;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.ExpiredJwtException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import kr.co.teamfresh.cpft.capi.advice.exception.CAuthenticationEntryPointException;
import kr.co.teamfresh.cpft.capi.advice.exception.CResourceNotExistException;
import kr.co.teamfresh.cpft.capi.config.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.capi.config.security.JwtTokenProvider;
import kr.co.teamfresh.cpft.capi.controller.v1.CarrierController;
import kr.co.teamfresh.cpft.capi.entity.order.Order;
import kr.co.teamfresh.cpft.capi.model.response.SingleResult;
import kr.co.teamfresh.cpft.capi.service.ResponseService;
import kr.co.teamfresh.cpft.capi.service.carrier.CarrierService;
import kr.co.teamfresh.cpft.capi.service.order.OrderService;
import kr.co.teamfresh.cpft.capi.util.ObjectMapperUtils;
import lombok.RequiredArgsConstructor;

@Api(tags = { "5. Order" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/order")
public class OrderController {

	Logger logger = LoggerFactory.getLogger(CarrierController.class);
	private final ResponseService responseService;
	private final JwtTokenProvider jwtTokenProvider;
	private final OrderService orderService;
	

	@ApiImplicitParams({
			@ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "모든 코드 조회", notes = "모든 코드를 조회한다.")
	@PostMapping
	public SingleResult<Order> saveOrder(@RequestHeader("X-AUTH-TOKEN") String token, @RequestBody OrderDTO order) {
		try {
			String userPk = jwtTokenProvider.getUserPk(token);
			return responseService.getSingleResult(orderService.saveOrder(ObjectMapperUtils.map(order, Order.class), userPk));
		} catch (CResourceNotExistException e) {
			throw e;
		} catch (ExpiredJwtException e) {
			logger.error(e.getMessage());
			logger.error("인증 토큰이 유효하지 않습니다." + token);
			throw new CAuthenticationEntryPointException("인증 토큰이 유효하지 않습니다.");
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e.getMessage());
			logger.error("오류가 발생했습니다." + token);
			throw e;
		}
	}
}
