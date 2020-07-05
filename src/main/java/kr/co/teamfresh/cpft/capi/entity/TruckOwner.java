package kr.co.teamfresh.cpft.capi.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import kr.co.teamfresh.cpft.capi.entity.order.OrderTruckOwner;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter 
@Setter
@NoArgsConstructor 
@AllArgsConstructor 
@Entity
@Table(name = "TRUCK_OWNER") 
public class TruckOwner {

	@Id @Column(name="USER_SEQ") String userSeq;
	
    @MapsId
    @OneToOne(mappedBy = "truckOwner")
    @JoinColumn(name="USER_SEQ")
    private User user;

    @Column(name="AGE")
    private int age;
    
    @Column(name="CARRER_CN")
    private String carrerCn;
    
    @Column(name="CARRER_DETAIL")
    private String carrerDetail;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "truckPK.truckOnwer")
	private Set<Truck> trucks = new HashSet<Truck>(0);

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "orderTruckOwnerPK.truckOnwer")
	private Set<OrderTruckOwner> orders = new HashSet<OrderTruckOwner>(0);
}
