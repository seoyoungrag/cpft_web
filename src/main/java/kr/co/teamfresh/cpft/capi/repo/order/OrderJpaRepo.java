package kr.co.teamfresh.cpft.capi.repo.order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.capi.entity.order.Order;

public interface OrderJpaRepo extends JpaRepository<Order, String> {

	List<Order> findAllByCarrierCarrierSeq(String carrierSeq);

}
