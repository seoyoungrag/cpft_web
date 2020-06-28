package kr.co.teamfresh.cpft.capi.service.order;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.capi.advice.exception.CUserNotFoundException;
import kr.co.teamfresh.cpft.capi.entity.order.Order;
import kr.co.teamfresh.cpft.capi.repo.UserJpaRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {
	
	private final UserJpaRepo userJpaRepo;
	
	public Order saveOrder(Order order, String uid) {
		order.setUser(userJpaRepo.findByUserLoginId(uid).orElseThrow(CUserNotFoundException::new));
		// TODO Auto-generated method stub
		return null;
	}

}
