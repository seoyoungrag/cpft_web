package kr.co.teamfresh.cpft.capi.service.order;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.capi.advice.exception.CUserNotFoundException;
import kr.co.teamfresh.cpft.capi.entity.User;
import kr.co.teamfresh.cpft.capi.entity.order.Order;
import kr.co.teamfresh.cpft.capi.repo.UserJpaRepo;
import kr.co.teamfresh.cpft.capi.repo.order.OrderJpaRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {
	
	private final UserJpaRepo userJpaRepo;
	private final OrderJpaRepo orderJpaRepo;
	
	public Order saveOrder(Order order, String uid) {
		//User user = userJpaRepo.findById(uid).orElseThrow(CUserNotFoundException::new);
		User user = new User();
		user.setUserSeq(uid);
		order.setUser(user);
		return orderJpaRepo.save(order);
	}

}
