package kr.co.teamfresh.cpft.capi.config.dto.order;

import java.io.Serializable;

import kr.co.teamfresh.cpft.capi.config.dto.CommonDate;
import kr.co.teamfresh.cpft.capi.config.dto.truckOwner.TruckOwnerDTO;
import lombok.Data;

@Data
public class OrderTruckOwnerDTO extends CommonDate implements Serializable{

	private OrderDTO order;
	private TruckOwnerDTO truckOwner;
	private String message;
	private String status;
	private String isRead;
	
}
