package kr.co.teamfresh.cpft.capi.config.dto.carrier;

import java.io.Serializable;

import kr.co.teamfresh.cpft.capi.entity.carrier.WorkGroupPK;
import lombok.Data;

@Data
public class WorkGroupDTO implements Serializable {
	private WorkGroupPK workGroupPk;
	private String workGroupManager;
}
