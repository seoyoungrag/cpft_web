package kr.co.teamfresh.cpft.capi.service.order;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.capi.config.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.capi.config.dto.order.OrderTruckOwnerDTO;
import kr.co.teamfresh.cpft.capi.entity.order.Order;
import kr.co.teamfresh.cpft.capi.entity.order.OrderTruckOwner;
import kr.co.teamfresh.cpft.capi.model.response.PageReqRes;
import kr.co.teamfresh.cpft.capi.repo.order.OrderJpaRepo;
import kr.co.teamfresh.cpft.capi.repo.orderTruckOwner.OrderTruckOwnerJpaRepo;
import kr.co.teamfresh.cpft.capi.util.ObjectMapperUtils;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {
	
	private final OrderJpaRepo orderJpaRepo;
	private final OrderTruckOwnerJpaRepo orderTruckOwnerJpaRepo;
	
	public OrderDTO saveOrder(Order order) {
		//User user = userJpaRepo.findById(uid).orElseThrow(CUserNotFoundException::new);		map().getWorkGroup().getOrders().add(destination);
		if(order.getOrderSeq()!=null && !order.getOrderSeq().equals("")) {
			//Order oriOrder = Optional.ofNullable(orderJpaRepo.getOne(order.getOrderSeq())).orElseThrow(CResourceNotExistException::new);
			//ObjectMapperUtils.map(order, oriOrder);
			//return orderJpaRepo.save(oriOrder);
			return ObjectMapperUtils.map(orderJpaRepo.save(order), OrderDTO.class);
		}else {
			return ObjectMapperUtils.map(orderJpaRepo.save(order), OrderDTO.class);
		}
	}

	public List<OrderDTO> findAllOrders() {
		return ObjectMapperUtils.mapAll(orderJpaRepo.findAll(), OrderDTO.class);
	}

	public List<OrderDTO> findAllByCarrierSeq(String carrierSeq) {
		return ObjectMapperUtils.mapAll(orderJpaRepo.findAllByCarrierCarrierSeqOrderByOrderSeq(carrierSeq), OrderDTO.class);
	}

	/*
	public Page<Order> listOrderByCarrierIdAndOrderSeq(String carrierSeq, String orderSeq, PageReqRes<OrderDTO> pageable) {
		//return ObjectMapperUtils.mapAll(orderJpaRepo.findAllByCarrierCarrierSeqAndOrderSeqOrderByOrderSeq(carrierSeq, orderSeq, pageable), OrderDTO.class);
		return orderJpaRepo.findAllByCarrierCarrierSeqAndOrderSeqOrderByOrderSeq(carrierSeq, orderSeq, pageable);
	}
	*/

	public Page<OrderTruckOwner> listOrderTruckOwnerOrderByOrderSeq(PageReqRes<OrderTruckOwner, OrderTruckOwnerDTO> pageable) {
		return orderTruckOwnerJpaRepo.findAllByOrderByOrderTruckOwnerPKOrderOrderSeq(pageable);
	}

	public Page<OrderTruckOwner> listOrderTruckOwnerByOrderSeqOrderByOrderSeq(String orderSeq, PageReqRes<OrderTruckOwner, OrderTruckOwnerDTO> pageable) {
		return orderTruckOwnerJpaRepo.findAllByOrderTruckOwnerPKOrderOrderSeqOrderByOrderTruckOwnerPKOrderOrderSeq(orderSeq, pageable);
	}
	
}
