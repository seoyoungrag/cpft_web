package kr.co.teamfresh.cpft.carrier.web.backend.dto.carrier;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class WorkGroupDTO implements Serializable {
	private Integer carrierSeq;
	private String workGroupNm;
	private List<WorkGroupManagerDTO> workGroupManagers = new ArrayList<WorkGroupManagerDTO>();
}
