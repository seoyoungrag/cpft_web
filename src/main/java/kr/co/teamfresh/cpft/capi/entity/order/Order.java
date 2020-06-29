package kr.co.teamfresh.cpft.capi.entity.order;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import kr.co.teamfresh.cpft.capi.entity.User;
import kr.co.teamfresh.cpft.capi.entity.carrier.WorkGroup;
import kr.co.teamfresh.cpft.capi.entity.common.CommonDateEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "ORDER")
@NoArgsConstructor
public class Order extends CommonDateEntity implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ORDER_SEQ")
	private String orderSeq;
	@JsonManagedReference
	@ManyToOne
	@JoinColumn(name = "WORK_GROUP_NM", insertable = false, updatable = false, referencedColumnName = "WORK_GROUP_NM")
	@JoinColumn(name = "CARRIER_SEQ", insertable = false, updatable = false, referencedColumnName = "CARRIER_SEQ")
	private WorkGroup workGroup;
	@Column(nullable = false, length = 100, name="RCRIT_TYPE")
	private String rcritType;
	@Column(nullable = false, length = 100, name="RCRIT_MANS")
	private String rcritMans;
	@Column(nullable = false, length = 100, name="CAR_TYPE")
	private String carType;
	@Column(nullable = false, length = 100, name="TON_TYPE")
	private String tonType;
	@Column(nullable = false, length = 100, name="DLVY_PRDLST")
	private String dlvyPrdlst;
	@Column(nullable = false, length = 100, name="PAY_AMT")
	private String payAmt;
	@Column(nullable = false, length = 100, name="PAY_FULL_TYPE")
	private String payFullType;
	@Column(nullable = false, length = 100, name="WORKING_AREA")
	private String workingArea;
	@Column(nullable = false, length = 100, name="OPRAT_SCTN")
	private String opratSctn;
	@Column(nullable = false, length = 100, name="WORKING_DAYS_TYPE")
	private String workingDaysType;
	@JsonManagedReference
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "order")
	private Set<OrderWorkDay> workDays = new HashSet<OrderWorkDay>(0);
	@Column(nullable = false, length = 100, name="WORK_HOUR_START")
	private int workHourStart;
	@Column(nullable = false, length = 100, name="WORK_MINUTE_START")
	private int workMinuteStart;
	@Column(nullable = false, length = 100, name="WORK_HOUR_END")
	private int workHourEnd;
	@Column(nullable = false, length = 100, name="WORK_MINUTE_END")
	private int workMinuteEnd;
	@Column(nullable = false, length = 100, name="DETAIL_MATTER")
	private String detailMatter;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "USER_SEQ")
	@JsonBackReference
	private User user; // 오더 - 회원의 관계 - N:1
}
