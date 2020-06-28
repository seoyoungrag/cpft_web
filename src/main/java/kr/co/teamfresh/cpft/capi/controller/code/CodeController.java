package kr.co.teamfresh.cpft.capi.controller.code;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import kr.co.teamfresh.cpft.capi.entity.code.CodeCtgry;
import kr.co.teamfresh.cpft.capi.model.response.ListResult;
import kr.co.teamfresh.cpft.capi.service.ResponseService;
import kr.co.teamfresh.cpft.capi.service.code.CodeService;
import lombok.RequiredArgsConstructor;

@Api(tags = { "4. Code" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/code")
public class CodeController {

	private final CodeService codeService;
	private final ResponseService responseService;

	@ApiOperation(value = "모든 코드 조회", notes = "모든 코드를 조회한다.")
	@GetMapping
	public ListResult<CodeCtgry> codes() {
		return responseService.getListResult(codeService.findAll());
	}

}
