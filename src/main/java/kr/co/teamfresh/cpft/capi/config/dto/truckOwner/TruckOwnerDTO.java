package kr.co.teamfresh.cpft.capi.config.dto.truckOwner;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class TruckOwnerDTO implements Serializable{

	private String userSeq;
	@JsonIgnore
	private String userLoginId;
	@JsonIgnore
	private String userLoginPw;
	private String userNm;
	private String userEmail;
    private int age;
    private String carrerCn;
    private String carrerDetail;
	private List<TruckDTO> trucks = new ArrayList<TruckDTO>(0);
}
