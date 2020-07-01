package kr.co.teamfresh.cpft.capi.service.order;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.capi.advice.exception.CResourceNotExistException;
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
		return ObjectMapperUtils.mapAll(orderJpaRepo.findAllByCarrierCarrierSeq(carrierSeq), OrderDTO.class);
	}

}
