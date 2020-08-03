package kr.co.teamfresh.cpft.carrier.web.backend.controller.v1;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import kr.co.teamfresh.cpft.carrier.web.backend.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.carrier.web.backend.model.response.ListResult;
import kr.co.teamfresh.cpft.carrier.web.backend.service.ResponseService;
import kr.co.teamfresh.cpft.carrier.web.backend.service.order.OrderService;
import lombok.RequiredArgsConstructor;

@Api(tags = { "8. Order(for Mobile)" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/order/mobile")
public class MobileOrderController {
	Logger logger = LoggerFactory.getLogger(MobileOrderController.class);
	private final ResponseService responseService;
	private final OrderService orderService;

	@ApiOperation(value = "진행상테로 오더 조회", notes = "진행상테에 대한 오더를 조회한다.")
	@GetMapping("/order/status/{status}")
	public ListResult<OrderDTO> listOrderByCarrierIdAndStatus(@RequestHeader("X-AUTH-TOKEN") String token, @PathVariable String status) {
		return responseService.getListResult(orderService.findAllByStatus(status));
	}
}
