package kr.co.teamfresh.cpft.capi.service.truckOwner;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.capi.config.dto.truckOwner.TruckOwnerForApplicationListDTO;
import kr.co.teamfresh.cpft.capi.config.dto.truckOwner.TruckOwnerForTruckOwnerListDTO;
import kr.co.teamfresh.cpft.capi.entity.TruckOwner;
import kr.co.teamfresh.cpft.capi.model.response.PageReqRes;
import kr.co.teamfresh.cpft.capi.repo.TruckOwner.TruckOwnerJpaRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class TruckOwnerService {

	private final TruckOwnerJpaRepo truckOwnerJpaRepo; 
	
	public Page<TruckOwner> findAllByOrdersOrderSeqOrderByUserUserSeq(String orderSeq, PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> page) {
		return truckOwnerJpaRepo.findAllByOrdersOrderTruckOwnerPKOrderOrderSeqOrderByUserUserSeq(orderSeq, page);
	}

	public Page<TruckOwner> findAllByOrderByUserUserSeq(PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> page) {
		return truckOwnerJpaRepo.findAllByOrderByUserUserSeq(page);
	}
	
}
