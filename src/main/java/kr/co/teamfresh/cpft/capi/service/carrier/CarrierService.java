package kr.co.teamfresh.cpft.capi.service.carrier;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.capi.advice.exception.CResourceNotExistException;
import kr.co.teamfresh.cpft.capi.entity.Carrier;
import kr.co.teamfresh.cpft.capi.entity.common.CacheKey;
import kr.co.teamfresh.cpft.capi.repo.carrier.CarrierJpaRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class CarrierService {

	private final CarrierJpaRepo carrierJpaRepo;

	//@Cacheable(value="carrier", key="#token")

	@Cacheable(value = CacheKey.CARRIER, key = "#carrierSeq", unless = "#result == null")
	public Carrier findCarrier(String carrierSeq) {
		return Optional.ofNullable(carrierJpaRepo.findById(carrierSeq)).get().orElseThrow(CResourceNotExistException::new);
	}
}
