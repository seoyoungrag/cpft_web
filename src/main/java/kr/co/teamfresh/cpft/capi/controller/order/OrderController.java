package kr.co.teamfresh.cpft.capi.controller.order;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import kr.co.teamfresh.cpft.capi.entity.order.Order;
import kr.co.teamfresh.cpft.capi.model.response.SingleResult;
import kr.co.teamfresh.cpft.capi.service.ResponseService;
import kr.co.teamfresh.cpft.capi.service.order.OrderService;
import lombok.RequiredArgsConstructor;

@Api(tags = { "5. Order" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/order")
public class OrderController {

	private final OrderService orderService;
	private final ResponseService responseService;

	@ApiOperation(value = "모든 코드 조회", notes = "모든 코드를 조회한다.")
	@PostMapping
	public SingleResult<Order> saveOrder(@RequestBody Order order) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String uid = authentication.getName();
		return responseService.getSingleResult(orderService.saveOrder(order, uid));
	}
}
