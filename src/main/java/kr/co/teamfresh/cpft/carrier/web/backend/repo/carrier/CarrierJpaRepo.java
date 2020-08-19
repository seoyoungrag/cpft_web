package kr.co.teamfresh.cpft.carrier.web.backend.repo.carrier;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.carrier.web.backend.entity.Carrier;

public interface CarrierJpaRepo extends JpaRepository<Carrier, Integer> {

	Carrier findAllByCarrierSeq(Integer carrierSeq);
}