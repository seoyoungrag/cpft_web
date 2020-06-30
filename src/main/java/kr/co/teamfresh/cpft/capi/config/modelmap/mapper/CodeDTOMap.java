package kr.co.teamfresh.cpft.capi.config.modelmap.mapper;

import org.modelmapper.PropertyMap;

import kr.co.teamfresh.cpft.capi.config.dto.code.CodeDTO;
import kr.co.teamfresh.cpft.capi.entity.code.Code;

public class CodeDTOMap extends PropertyMap<Code, CodeDTO> {
    @Override
    protected void configure(){
    	//map().setCodeCtNm(source.getCodeCtgry().getCodeCtgryNm());
    }
}