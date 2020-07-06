package kr.co.teamfresh.cpft.capi.controller.v1;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaUpdate;
import javax.persistence.criteria.Root;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import kr.co.teamfresh.cpft.capi.config.dto.truckOwner.TruckOwnerDTO;
import kr.co.teamfresh.cpft.capi.entity.TruckOwner;
import kr.co.teamfresh.cpft.capi.model.response.PageReqRes;
import kr.co.teamfresh.cpft.capi.service.ResponseService;
import kr.co.teamfresh.cpft.capi.service.truckOwner.TruckOwnerService;
import lombok.RequiredArgsConstructor;

@Api(tags = { "6. TruckOrder" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/truckOwner")
public class OrderTruckOwnerController {

	Logger logger = LoggerFactory.getLogger(OrderTruckOwnerController.class);
	private final ResponseService responseService;
	private final TruckOwnerService truckOwnerService;

	@ApiOperation(value = "오더가 있는 지원자(차주) 조회", notes = "차주 중 특정 오더를 지원한 사용자를 조회한다.")
	@GetMapping("/order/{orderSeq}")
	public PageReqRes<TruckOwner, TruckOwnerDTO> listTruckOwnerBydOrderSeq(
			@PathVariable String orderSeq, 
			@ApiParam(value = "오더 지원자 페이징 정보", required = true) @ModelAttribute PageReqRes<TruckOwner,TruckOwnerDTO> page) {
		return responseService.getPageResult(page, truckOwnerService.findAllByOrdersOrderSeqOrderByUserUserSeq(orderSeq, page), TruckOwnerDTO.class);	
	}
	
}
