package kr.co.teamfresh.cpft.capi.service.order;

import java.util.Iterator;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.capi.config.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.capi.entity.Carrier;
import kr.co.teamfresh.cpft.capi.entity.User;
import kr.co.teamfresh.cpft.capi.entity.carrier.WorkGroup;
import kr.co.teamfresh.cpft.capi.entity.order.Order;
import kr.co.teamfresh.cpft.capi.repo.UserJpaRepo;
import kr.co.teamfresh.cpft.capi.repo.carrier.CarrierJpaRepo;
import kr.co.teamfresh.cpft.capi.repo.order.OrderJpaRepo;
import kr.co.teamfresh.cpft.capi.util.ObjectMapperUtils;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {
	
	private final UserJpaRepo userJpaRepo;
	private final OrderJpaRepo orderJpaRepo;
	private final CarrierJpaRepo carrierJpaRepo;
	
	public Order saveOrder(Order order, String uid) {
		//User user = userJpaRepo.findById(uid).orElseThrow(CUserNotFoundException::new);		map().getWorkGroup().getOrders().add(destination);
		return orderJpaRepo.save(order);
	}

	public List findAllOrders() {
		return ObjectMapperUtils.mapAll(orderJpaRepo.findAll(), OrderDTO.class);
	}

}
