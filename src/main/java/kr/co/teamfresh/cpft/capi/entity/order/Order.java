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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import kr.co.teamfresh.cpft.capi.entity.User;
import kr.co.teamfresh.cpft.capi.entity.common.CommonDateEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Order extends CommonDateEntity implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String orderSeq;
	@Column(nullable = false, length = 100)
	private String workGroup;
	private String workGroupManager;
	@Column(nullable = false, length = 100)
	private String rcritType;
	@Column(nullable = false, length = 100)
	private String rcritMans;
	@Column(nullable = false, length = 100)
	private String carType;
	@Column(nullable = false, length = 100)
	private String tonType;
	@Column(nullable = false, length = 100)
	private String dlvyPrdlst;
	@Column(nullable = false, length = 100)
	private String payAmt;
	@Column(nullable = false, length = 100)
	private String payFullType;
	@Column(nullable = false, length = 100)
	private String workingArea;
	@Column(nullable = false, length = 100)
	private String opratSctn;
	@Column(nullable = false, length = 100)
	private String workingDaysType;
	@JsonManagedReference
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "order")
	private Set<OrderWorkDay> workDays = new HashSet<OrderWorkDay>(0);
	@Column(nullable = false, length = 100)
	private int workHourStart;
	@Column(nullable = false, length = 100)
	private int workMinuteStart;
	@Column(nullable = false, length = 100)
	private int workHourEnd;
	@Column(nullable = false, length = 100)
	private int workMinuteEnd;
	@Column(nullable = false, length = 100)
	private String detailMatter;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "USER_SEQ")
	@JsonBackReference
	private User user; // 오더 - 회원의 관계 - N:1
}
