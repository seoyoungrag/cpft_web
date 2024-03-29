package kr.co.teamfresh.cpft.carrier.web.backend.repo.orderTruckOwner;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.carrier.web.backend.entity.order.OrderTruckOwner;
import kr.co.teamfresh.cpft.carrier.web.backend.entity.order.OrderTruckOwnerPK;

public interface OrderTruckOwnerJpaRepo extends JpaRepository<OrderTruckOwner, OrderTruckOwnerPK> {

	Page<OrderTruckOwner> findAllByOrderTruckOwnerPKOrderStatusOrderByCreatedAtAscOrderSeqAscUserSeqAsc(String status, Pageable pageable);
	Page<OrderTruckOwner> findAllByOrderTruckOwnerPKOrderStatusAndOrderTruckOwnerPKOrderOrderSeqOrderByCreatedAtAscOrderSeqAscUserSeqAsc(String status, String orderSeq, Pageable pageable);

}
