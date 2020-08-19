package kr.co.teamfresh.cpft.carrier.web.backend.service.truckOwner;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.carrier.web.backend.dto.truckOwner.TruckOwnerForTruckOwnerListDTO;
import kr.co.teamfresh.cpft.carrier.web.backend.entity.TruckOwner;
import kr.co.teamfresh.cpft.carrier.web.backend.model.response.PageReqRes;
import kr.co.teamfresh.cpft.carrier.web.backend.repo.TruckOwner.TruckOwnerJpaRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class TruckOwnerService {

	private final TruckOwnerJpaRepo truckOwnerJpaRepo; 
	
	public Page<TruckOwner> findAllByOrdersOrderSeqOrderByUserUserSeq(Integer orderSeq, PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> page) {
		return truckOwnerJpaRepo.findAllByOrdersOrderTruckOwnerPKOrderOrderSeqOrderByUserUserSeq(orderSeq, page);
	}

	public Page<TruckOwner> findAllByOrderByUserUserSeq(PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> page) {
		return truckOwnerJpaRepo.findAllByOrderByUserUserSeq(page);
	}

	public Page<TruckOwner> findAllByOrderTruckOwnerStatusAndOrderStatusOrderByUserUserSeq(String orderTruckOwnerStatus, String orderStatus, PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> page) {
		return truckOwnerJpaRepo.findAllByOrdersStatusAndOrdersOrderTruckOwnerPKOrderStatusOrderByUserUserSeq(orderTruckOwnerStatus, orderStatus, page);
	}
	
}
