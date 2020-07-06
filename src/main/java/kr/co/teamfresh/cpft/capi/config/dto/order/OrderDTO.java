package kr.co.teamfresh.cpft.capi.config.dto.order;

import java.util.ArrayList;
import java.util.List;

import kr.co.teamfresh.cpft.capi.config.dto.CommonDate;
import lombok.Data;

@Data
public class OrderDTO extends CommonDate {
	private String carrierSeq;
	private String carrierNm;
	private String userSeq;
	private String userNm;
	private String orderSeq;
	private String workGroupNm;
	private String workGroupManager;
	private String rcritType;
	private String rcritMans;
	private List<String> carTypes = new ArrayList<>();
	private String tonType;
	private String dlvyPrdlst;
	private String payAmt;
	private String payFullType;
	private String workingArea;
	private String opratSctn;
	private String workingDaysType;
	private List<String> workDays = new ArrayList<>();
	private int workHourStart;
	private int workMinuteStart;
	private int workHourEnd;
	private int workMinuteEnd;
	private String detailMatter;
	private String status;
	private String workingAreaEtc;
}
