package kr.co.teamfresh.cpft.capi.config.dto.user;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import kr.co.teamfresh.cpft.capi.config.dto.carrier.CarrierDTO;
import kr.co.teamfresh.cpft.capi.config.dto.order.OrderDTO;
import lombok.Data;

@Data
public class UserDTO implements Serializable{

	private String userSeq;
	private String userLoginId;
	private String userLoginPw;
	private String userNm;
	private String userEmail;
	private Set<OrderDTO> orders = new HashSet<OrderDTO>(0);
	private CarrierDTO carrier;
	private List<String> roles = new ArrayList<>();
}
