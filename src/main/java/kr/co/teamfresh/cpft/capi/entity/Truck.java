package kr.co.teamfresh.cpft.capi.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import kr.co.teamfresh.cpft.capi.entity.common.CommonDateEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "TRUCK_OWNER_TRUCK")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Truck extends CommonDateEntity {

	@EmbeddedId
	private TruckPK truckPK;
	
	
}
