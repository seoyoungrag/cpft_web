package kr.co.teamfresh.cpft.capi.service.carrier;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.capi.advice.exception.CResourceNotExistException;
import kr.co.teamfresh.cpft.capi.entity.Carrier;
import kr.co.teamfresh.cpft.capi.repo.carrier.CarrierJpaRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class CarrierService {

	private final CarrierJpaRepo carrierJpaRepo;
	
	public Carrier findCarrier(String carrierSeq) {
		return Optional.ofNullable(carrierJpaRepo.findById(carrierSeq)).get().orElseThrow(CResourceNotExistException::new);
	}
}
