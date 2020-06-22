package kr.co.teamfresh.cpft.capi.controller.v1;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.baroservice.api.BarobillApiService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import kr.co.teamfresh.cpft.capi.controller.baroservice.RegistAndIssueBrokerTaxInvoice;
import kr.co.teamfresh.cpft.capi.controller.baroservice.RegistAndIssueTaxInvoice;
import kr.co.teamfresh.cpft.capi.controller.baroservice.RegistBrokerTaxInvoiceEX;
import kr.co.teamfresh.cpft.capi.model.response.CommonResult;
import kr.co.teamfresh.cpft.capi.service.ResponseService;
import lombok.RequiredArgsConstructor;


@Api(tags = { "0. Barobill" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/barobill")
public class BaroController {
 
    Logger logger = LoggerFactory.getLogger(BaroController.class);
	
	private final ResponseService responseService;
    private final BarobillApiService barobillApiService;
    private final ModelMapper modelMapper;

    String certKey = "330E5BFA-0EAB-46F5-ADBE-14134EF67FE9";            //인증키
    String corpNum = "5618801138";            //연계사업자 사업자번호 ('-' 제외, 10자리)
    String checkCorpNumDumy = "5618801138";        //확인할 사업자번호 ('-' 제외, 10자리)
    
	@Transactional
	@ApiOperation(value = "CheckCorpIsMember - 회원사 여부 확인", notes = "바로빌에 가입되어 있는 사업자인지 확인합니다.")
	@PostMapping(value = "/checkCorpIsMember")
	public CommonResult CheckCorpIsMember(
			@ApiParam(value = "확인할 사업자번호 ('-' 제외, 10자리)", required = true) @RequestParam(defaultValue = "5618801138") String checkCorpNum) {

        int result = barobillApiService.taxInvoice.checkCorpIsMember(certKey, corpNum, checkCorpNum);

		return responseService.getSingleResult(result);
	}

	@Transactional
	@ApiOperation(value = "RegistAndIssueTaxInvoice - 간편 발행", notes = "위수탁 (세금)계산서의 '임시저장'과 '발행'을 한번에 처리합니다.발행을 위해서는 공급자의 공인인증서가 바로빌에 등록되어야 합니다. 발행이 완료된 (세금)계산서는 자동으로 국세청으로 전송됩니다. ")
	@PostMapping(value = "/registAndIssueTaxInvoice")
	public CommonResult registAndIssueTaxInvoice(
			/*
			@ApiParam(value = "문자메시지 전송여부\r\n true 로 설정되더라도, (세금)계산서 내의 공급받는자의 휴대폰이 저장되지 않은 경우 전송되지 않습니다.\r\n별도 포인트가 차감됨.", required = true) @RequestParam(defaultValue = "false") boolean sendSMS,
		@ApiParam(value = "가산세가 예상되는 (세금)계산서(작성일자 기준, 익월 10일이 지나서 발행하는 경우)는 true 로 설정한 경우에만 발행 가능합니다.\r\ntrue 로 설정되었더라도 '지연발행' 설정이 '제한'으로 되어있는 경우에는 발행되지 않습니다.\r\nChangeNTSSendOption 함수를 통해 지연발행 여부를 설정할 수 있습니다.", required = true) @RequestParam(defaultValue = "false") boolean forceIssue,
		@ApiParam(value = "발행 시 공급받는자에게 전송되는 이메일의 제목\r\n'빈 문자열'로 입력한 경우 바로빌에서 지정한 기본 이메일 제목으로 전송됩니다.", required = false) @RequestParam(defaultValue = "") @Size(max=200) String mailTitle,
		@ApiParam(value = "공급자 정보", required = true) @RequestParam(defaultValue = "") InvoiceParty invoicerParty,
		@ApiParam(value = "공급받는자 정보", required = true) @RequestParam(defaultValue = "") InvoiceParty invoiceeParty,
		@ApiParam(value = "수탁자 정보", required = false) @RequestParam(defaultValue = "") InvoiceParty brokerParty,
		@ApiParam(value = "품목 상세 목록", required = true) @RequestParam(defaultValue = "") ArrayOfTaxInvoiceTradeLineItem arrayOfTaxInvoiceTradeLineItem 
		*/
			@ApiParam(value = "간편 발행 요청값", required = true) @RequestBody RegistAndIssueTaxInvoice registAndIssueTaxInvoice) throws JsonProcessingException {

		/*
		TaxInvoice invoice = new TaxInvoice();
		
		//InvoiceParty invoicerParty = new InvoiceParty();
		//InvoiceParty invoiceeParty = new InvoiceParty();
		//InvoiceParty brokerParty = new InvoiceParty();
		
		//invoice.setInvoicerParty(invoicerParty);
		//invoice.setInvoiceeParty(invoiceeParty);
		//invoice.setBrokerParty(brokerParty);
		
		//ArrayOfTaxInvoiceTradeLineItem arrayOfTaxInvoiceTradeLineItem = new ArrayOfTaxInvoiceTradeLineItem();
		//TaxInvoiceTradeLineItem taxInvoiceTradeLineItem = new TaxInvoiceTradeLineItem(); 
		//arrayOfTaxInvoiceTradeLineItem.getTaxInvoiceTradeLineItem().add(taxInvoiceTradeLineItem);
		
		invoice.setTaxInvoiceTradeLineItems(arrayOfTaxInvoiceTradeLineItem);
        int result = barobillApiService.taxInvoice.registAndIssueTaxInvoice(certKey, corpNum, invoice, sendSMS, forceIssue, mailTitle);

        if(result < 0) {
        	String errResult = result+" "+getErrString(result);
    		return responseService.getFailResult(result, errResult);
        }
		return responseService.getSingleResult(result);
		*/
		ObjectMapper mapper = new ObjectMapper();

		logger.info(mapper.writeValueAsString(modelMapper.map(registAndIssueTaxInvoice.getInvoice(), com.baroservice.ws.TaxInvoice.class)));
		
        int result = barobillApiService.taxInvoice.registAndIssueTaxInvoice(certKey, corpNum, modelMapper.map(registAndIssueTaxInvoice.getInvoice(), com.baroservice.ws.TaxInvoice.class), registAndIssueTaxInvoice.isSendSms(), registAndIssueTaxInvoice.isForceIssue(), registAndIssueTaxInvoice.getMailTitle());

        if(result < 0) {
        	String errResult = result+" "+getErrString(result);
    		return responseService.getFailResult(result, errResult);
        }
		return responseService.getSingleResult(result);
	}
	
	@Transactional
	@ApiOperation(value = "RegistAndIssueBrokerTaxInvoice - 위수탁발행", notes = "위수탁 (세금)계산서의 '임시저장'과 '발행'을 한번에 처리합니다.발행을 위해서는 공급자의 공인인증서가 바로빌에 등록되어야 합니다. 발행이 완료된 (세금)계산서는 자동으로 국세청으로 전송됩니다. ")
	@PostMapping(value = "/registAndIssueBrokerTaxInvoice")
	public CommonResult registAndIssueBrokerTaxInvoice(
			/*
			@ApiParam(value = "문자메시지 전송여부\r\n true 로 설정되더라도, (세금)계산서 내의 공급받는자의 휴대폰이 저장되지 않은 경우 전송되지 않습니다.\r\n별도 포인트가 차감됨.", required = true) @RequestParam(defaultValue = "false") boolean sendSMS,
		@ApiParam(value = "가산세가 예상되는 (세금)계산서(작성일자 기준, 익월 10일이 지나서 발행하는 경우)는 true 로 설정한 경우에만 발행 가능합니다.\r\ntrue 로 설정되었더라도 '지연발행' 설정이 '제한'으로 되어있는 경우에는 발행되지 않습니다.\r\nChangeNTSSendOption 함수를 통해 지연발행 여부를 설정할 수 있습니다.", required = true) @RequestParam(defaultValue = "false") boolean forceIssue,
		@ApiParam(value = "발행 시 공급받는자에게 전송되는 이메일의 제목\r\n'빈 문자열'로 입력한 경우 바로빌에서 지정한 기본 이메일 제목으로 전송됩니다.", required = false) @RequestParam(defaultValue = "") @Size(max=200) String mailTitle,
		@ApiParam(value = "공급자 정보", required = true) @RequestParam(defaultValue = "") InvoiceParty invoicerParty,
		@ApiParam(value = "공급받는자 정보", required = true) @RequestParam(defaultValue = "") InvoiceParty invoiceeParty,
		@ApiParam(value = "수탁자 정보", required = false) @RequestParam(defaultValue = "") InvoiceParty brokerParty,
		@ApiParam(value = "품목 상세 목록", required = true) @RequestParam(defaultValue = "") ArrayOfTaxInvoiceTradeLineItem arrayOfTaxInvoiceTradeLineItem 
		*/
			@ApiParam(value = "위수탁발행 발행 요청값", required = true) @RequestBody RegistAndIssueBrokerTaxInvoice registAndIssueBrokerTaxInvoice) throws JsonProcessingException {

		/*
		TaxInvoice invoice = new TaxInvoice();
		
		//InvoiceParty invoicerParty = new InvoiceParty();
		//InvoiceParty invoiceeParty = new InvoiceParty();
		//InvoiceParty brokerParty = new InvoiceParty();
		
		//invoice.setInvoicerParty(invoicerParty);
		//invoice.setInvoiceeParty(invoiceeParty);
		//invoice.setBrokerParty(brokerParty);
		
		//ArrayOfTaxInvoiceTradeLineItem arrayOfTaxInvoiceTradeLineItem = new ArrayOfTaxInvoiceTradeLineItem();
		//TaxInvoiceTradeLineItem taxInvoiceTradeLineItem = new TaxInvoiceTradeLineItem(); 
		//arrayOfTaxInvoiceTradeLineItem.getTaxInvoiceTradeLineItem().add(taxInvoiceTradeLineItem);
		
		invoice.setTaxInvoiceTradeLineItems(arrayOfTaxInvoiceTradeLineItem);
        int result = barobillApiService.taxInvoice.registAndIssueTaxInvoice(certKey, corpNum, invoice, sendSMS, forceIssue, mailTitle);

        if(result < 0) {
        	String errResult = result+" "+getErrString(result);
    		return responseService.getFailResult(result, errResult);
        }
		return responseService.getSingleResult(result);
		*/
		ObjectMapper mapper = new ObjectMapper();

		logger.info(mapper.writeValueAsString(modelMapper.map(registAndIssueBrokerTaxInvoice.getInvoice(), com.baroservice.ws.TaxInvoice.class)));
		
        int result = barobillApiService.taxInvoice.registAndIssueTaxInvoice(certKey, corpNum, modelMapper.map(registAndIssueBrokerTaxInvoice.getInvoice(), com.baroservice.ws.TaxInvoice.class), registAndIssueBrokerTaxInvoice.isSendSMS(), registAndIssueBrokerTaxInvoice.isForceIssue(), registAndIssueBrokerTaxInvoice.getMailTitle());

        if(result < 0) {
        	String errResult = result+" "+getErrString(result);
    		return responseService.getFailResult(result, errResult);
        }
		return responseService.getSingleResult(result);
	}


	@Transactional
	@ApiOperation(value = "RegistBrokerTaxInvoiceEX - 위수탁 (세금)계산서 임시저장", notes = "위수탁 (세금)계산서를 임시저장합니다. (승인 시 자동발행 옵션 추가)\r\n저장 후 바로빌 사이트의 '전자세금계산서 > 임시저장(연동)함' 에서 조회할 수 있습니다.")
	@PostMapping(value = "/registBrokerTaxInvoiceEX")
	public CommonResult registBrokerTaxInvoiceEX(
			@ApiParam(value = "위수탁발행 발행 요청값", required = true) @RequestBody RegistBrokerTaxInvoiceEX registBrokerTaxInvoiceEX) throws JsonProcessingException {

		ObjectMapper mapper = new ObjectMapper();

		logger.info(mapper.writeValueAsString(modelMapper.map(registBrokerTaxInvoiceEX.getInvoice(), com.baroservice.ws.TaxInvoice.class)));
		
        int result = barobillApiService.taxInvoice.registBrokerTaxInvoiceEX(certKey, corpNum, modelMapper.map(registBrokerTaxInvoiceEX.getInvoice(), com.baroservice.ws.TaxInvoice.class), registBrokerTaxInvoiceEX.getIssueTiming());

        if(result < 0) {
        	String errResult = result+" "+getErrString(result);
    		return responseService.getFailResult(result, errResult);
        }
		return responseService.getSingleResult(result);
	}

	private String getErrString(int errCode) {
		return barobillApiService.taxInvoice.getErrString(certKey, errCode);
	}
}