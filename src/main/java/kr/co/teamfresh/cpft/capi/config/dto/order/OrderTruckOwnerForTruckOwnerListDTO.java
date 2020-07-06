package kr.co.teamfresh.cpft.capi.config.dto.order;

import java.io.Serializable;

import kr.co.teamfresh.cpft.capi.config.dto.CommonDate;
import lombok.Data;

@Data
public class OrderTruckOwnerForTruckOwnerListDTO extends CommonDate implements Serializable{

	private OrderDTO order;
	//private TruckOwnerForTruckOwnerListDTO truckOwner;
	private String message;
	private String status;
	private String isRead;
	
}
