package kr.co.teamfresh.cpft.carrier.web.backend.controller.v1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import kr.co.teamfresh.cpft.carrier.web.backend.dto.code.CodeDTO;
import kr.co.teamfresh.cpft.carrier.web.backend.model.response.ListResult;
import kr.co.teamfresh.cpft.carrier.web.backend.service.ResponseService;
import kr.co.teamfresh.cpft.carrier.web.backend.service.code.CodeService;
import lombok.RequiredArgsConstructor;

@Api(tags = { "9. Code" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/mobile/code")
public class MobileCodeController {

	private final CodeService codeService;
	private final ResponseService responseService;

	@ApiOperation(value = "모든 코드 조회", notes = "모든 코드를 조회한다.")
	@GetMapping
	public ListResult<CodeDTO> codes() {
		return responseService.getListResult(codeService.findAllCodes());
	}

}
