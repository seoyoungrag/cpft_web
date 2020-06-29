package kr.co.teamfresh.cpft.capi.entity.carrier;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;

@Data
@Embeddable
public class WorkGroupPK implements Serializable {
    @Column(name = "CARRIER_SEQ")
	private String carrierSeq;
    @Column(name = "WORK_GROUP_NM")
	private String workGroupNm;
}