package kr.co.teamfresh.cpft.capi.entity.order;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import kr.co.teamfresh.cpft.capi.entity.common.CommonDateEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter 
@Setter
@NoArgsConstructor 
@AllArgsConstructor 
@Entity
@Table(name = "ORDER_TRUCK_OWNER") 
public class OrderTruckOwner extends CommonDateEntity implements Serializable{

	@EmbeddedId
	private OrderTruckOwnerPK orderTruckOwnerPK;

	@Column(nullable = false, length = 100, name="MESSAGE")
	private String message;

	@Column(nullable = false, length = 100, name="STATUS")
	private String status;

	@Column(nullable = false, length = 100, name="IS_READ")
	private String isRead;
}
