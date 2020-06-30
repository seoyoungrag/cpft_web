package kr.co.teamfresh.cpft.capi.repo.carrier;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.capi.entity.Carrier;

public interface CarrierJpaRepo extends JpaRepository<Carrier, String> {

	Carrier findAllByCarrierSeq(String carrierSeq);
}