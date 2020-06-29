package kr.co.teamfresh.cpft.capi.entity.carrier;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import kr.co.teamfresh.cpft.capi.entity.Carrier;
import kr.co.teamfresh.cpft.capi.entity.order.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "WORK_GROUP")
@Getter
@Setter
@NoArgsConstructor
public class WorkGroup  implements Serializable {
	@EmbeddedId
	@AttributeOverrides({
			@AttributeOverride(name = "carrierSeq", column = @Column(name = "CARRIER_SEQ", nullable = false)),
			@AttributeOverride(name = "workGroupNm", column = @Column(name = "WORK_GROUP_NM", nullable = false)) })
	private WorkGroupPK workGroupPk;
	
	@Column(nullable = false, length = 100, name="WORK_GROUP_MANAGER")
	private String workGroupManager;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "workGroup")
	@PrimaryKeyJoinColumn
	@JsonManagedReference
	private Set<Order> orders = new HashSet<Order>(0);
	
	@ManyToOne
	@JoinColumn(name = "CARRIER_SEQ", nullable = false, insertable = false, updatable = false)
	@JsonBackReference
	private Carrier carrier;
}
