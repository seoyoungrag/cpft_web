package kr.co.teamfresh.cpft.carrier.web.backend.model.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SingleResult<T> extends CommonResult {
	private T data;
}