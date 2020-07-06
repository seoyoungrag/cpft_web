package kr.co.teamfresh.cpft.capi.controller.v1;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import kr.co.teamfresh.cpft.capi.config.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.capi.config.dto.order.OrderTruckOwnerDTO;
import kr.co.teamfresh.cpft.capi.entity.order.Order;
import kr.co.teamfresh.cpft.capi.entity.order.OrderTruckOwner;
import kr.co.teamfresh.cpft.capi.model.response.ListResult;
import kr.co.teamfresh.cpft.capi.model.response.PageReqRes;
import kr.co.teamfresh.cpft.capi.model.response.SingleResult;
import kr.co.teamfresh.cpft.capi.service.ResponseService;
import kr.co.teamfresh.cpft.capi.service.order.OrderService;
import kr.co.teamfresh.cpft.capi.util.ObjectMapperUtils;
import lombok.RequiredArgsConstructor;

@Api(tags = { "5. Order" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/order")
public class OrderController {

	Logger logger = LoggerFactory.getLogger(OrderController.class);
	private final ResponseService responseService;
	private final OrderService orderService;
	

	@ApiImplicitParams({
			@ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "오더 저장", notes = "오더를 저장한다.")
	@PostMapping
	public SingleResult<OrderDTO> saveOrder(@RequestHeader("X-AUTH-TOKEN") String token, @RequestBody OrderDTO order) {
		return responseService.getSingleResult(orderService.saveOrder(ObjectMapperUtils.map(order, Order.class)));
	}

	@ApiOperation(value = "오더 조회", notes = "사용자 운송사의 오더를 조회한다.")
	@GetMapping("/carrier/{carrierSeq}")
	public ListResult<OrderDTO> listOrderByCarrierId(@RequestHeader("X-AUTH-TOKEN") String token, @PathVariable String carrierSeq) {
		return responseService.getListResult(orderService.findAllByCarrierSeq(carrierSeq));
	}

	@ApiOperation(value = "오더의 지원자(차주) 조회", notes = "오더의 지원자들을 조회한다.")
	@GetMapping("/{orderSeq}/truckOwner")
	public PageReqRes<OrderTruckOwner, OrderTruckOwnerDTO> listOrderTruckOwnerBydOrderSeq(
			@PathVariable String orderSeq, 
			@ApiParam(value = "오더 지원자 페이징 정보", required = true) @ModelAttribute PageReqRes<OrderTruckOwner, OrderTruckOwnerDTO> page) {
		if(orderSeq.equals("all")) {
			return responseService.getPageResult(page, orderService.listOrderTruckOwnerOrderByOrderSeq(page), OrderTruckOwnerDTO.class);
		}else {
			return responseService.getPageResult(page, orderService.listOrderTruckOwnerByOrderSeqOrderByOrderSeq(orderSeq, page), OrderTruckOwnerDTO.class);	
		}
	}
}
