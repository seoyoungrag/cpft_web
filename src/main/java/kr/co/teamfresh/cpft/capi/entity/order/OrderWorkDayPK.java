package kr.co.teamfresh.cpft.capi.entity.order;

import java.io.Serializable;

import lombok.Data;

@Data
public class OrderWorkDayPK implements Serializable {
	private String orderSeq;
	private String workDay;

    public OrderWorkDayPK() {}

    public OrderWorkDayPK(String orderSeq, String workDay) {
        this.orderSeq = orderSeq;
        this.workDay = workDay;
    }
}
