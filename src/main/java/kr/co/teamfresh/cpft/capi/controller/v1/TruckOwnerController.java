package kr.co.teamfresh.cpft.capi.controller.v1;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import kr.co.teamfresh.cpft.capi.config.dto.truckOwner.TruckOwnerForApplicationListDTO;
import kr.co.teamfresh.cpft.capi.config.dto.truckOwner.TruckOwnerForTruckOwnerListDTO;
import kr.co.teamfresh.cpft.capi.entity.TruckOwner;
import kr.co.teamfresh.cpft.capi.model.response.PageReqRes;
import kr.co.teamfresh.cpft.capi.service.ResponseService;
import kr.co.teamfresh.cpft.capi.service.truckOwner.TruckOwnerService;
import lombok.RequiredArgsConstructor;

@Api(tags = { "6. TruckOwner" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/truckOwner")
public class TruckOwnerController {

	Logger logger = LoggerFactory.getLogger(TruckOwnerController.class);
	private final ResponseService responseService;
	private final TruckOwnerService truckOwnerService;

	@ApiOperation(value = "오더가 있는 지원자(차주) 조회", notes = "차주 중 특정 오더를 지원한 사용자를 조회한다.")
	@GetMapping("/order/{orderSeq}")
	public PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> listTruckOwnerBydOrderSeq(
			@PathVariable String orderSeq, 
			@ApiParam(value = "오더 지원자 페이징 정보", required = true) @ModelAttribute PageReqRes<TruckOwner,TruckOwnerForTruckOwnerListDTO> page) {
		return responseService.getPageResult(page, truckOwnerService.findAllByOrdersOrderSeqOrderByUserUserSeq(orderSeq, page), TruckOwnerForTruckOwnerListDTO.class);	
	}

	@ApiOperation(value = "차주 조회", notes = "데이터에 등록된 모든 차주를 조회한다.")
	@GetMapping
	public PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> listTruckOwnerBydOrderStatus(
			@ApiParam(value = "오더 지원자 페이징 정보", required = true) @ModelAttribute PageReqRes<TruckOwner,TruckOwnerForTruckOwnerListDTO> page) {
		return responseService.getPageResult(page, truckOwnerService.findAllByOrderByUserUserSeq(page), TruckOwnerForTruckOwnerListDTO.class);	
	}
}
