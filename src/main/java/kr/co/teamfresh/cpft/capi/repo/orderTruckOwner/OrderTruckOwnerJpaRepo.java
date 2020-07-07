package kr.co.teamfresh.cpft.capi.repo.orderTruckOwner;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.capi.entity.order.OrderTruckOwner;
import kr.co.teamfresh.cpft.capi.entity.order.OrderTruckOwnerPK;

public interface OrderTruckOwnerJpaRepo extends JpaRepository<OrderTruckOwner, OrderTruckOwnerPK> {

	Page<OrderTruckOwner> findAllByOrderTruckOwnerPKOrderStatusOrderByOrderTruckOwnerPKOrderOrderSeq(String status, Pageable pageable);
	Page<OrderTruckOwner> findAllByOrderTruckOwnerPKOrderStatusAndOrderTruckOwnerPKOrderOrderSeqOrderByOrderTruckOwnerPKOrderOrderSeq(String status, String orderSeq, Pageable pageable);

}
