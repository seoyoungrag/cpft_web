package kr.co.teamfresh.cpft.carrier.web.backend.model.response;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ListResult<T> extends CommonResult {
	private List<T> list;
}