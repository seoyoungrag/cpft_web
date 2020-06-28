package kr.co.teamfresh.cpft.capi.entity.order;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@IdClass(OrderWorkDayPK.class)
public class OrderWorkDay implements Serializable {

	@Id
	private String orderSeq;
	@Id
	private String workDay;
	@ManyToOne
	@JoinColumn(name = "orderSeq", insertable = false, updatable = false)
	@JsonBackReference
	private Order order;
}
