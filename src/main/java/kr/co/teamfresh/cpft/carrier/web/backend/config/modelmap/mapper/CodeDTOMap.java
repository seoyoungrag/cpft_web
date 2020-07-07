package kr.co.teamfresh.cpft.carrier.web.backend.config.modelmap.mapper;

import org.modelmapper.PropertyMap;

import kr.co.teamfresh.cpft.carrier.web.backend.dto.code.CodeDTO;
import kr.co.teamfresh.cpft.carrier.web.backend.entity.code.Code;

public class CodeDTOMap extends PropertyMap<Code, CodeDTO> {
    @Override
    protected void configure(){
    	//map().setCodeCtNm(source.getCodeCtgry().getCodeCtgryNm());
    }
}