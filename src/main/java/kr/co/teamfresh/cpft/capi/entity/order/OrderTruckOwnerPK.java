package kr.co.teamfresh.cpft.capi.entity.order;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import kr.co.teamfresh.cpft.capi.entity.TruckOwner;
import lombok.Data;

@Data
@Embeddable
public class OrderTruckOwnerPK implements Serializable {

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ORDER_SEQ", nullable = false)
	@JsonProperty(access = Access.READ_ONLY)
	private Order order;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "USER_SEQ", nullable = false)
	@JsonProperty(access = Access.READ_ONLY)
	private TruckOwner truckOnwer;
}
