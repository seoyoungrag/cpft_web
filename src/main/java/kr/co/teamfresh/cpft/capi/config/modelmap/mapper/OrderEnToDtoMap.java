package kr.co.teamfresh.cpft.capi.config.modelmap.mapper;

import org.modelmapper.PropertyMap;

import kr.co.teamfresh.cpft.capi.config.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.capi.entity.order.Order;

public class OrderEnToDtoMap extends PropertyMap<Order, OrderDTO> {
	@Override
	protected void configure() {
		map().setCarrierSeq(source.getCarrier().getCarrierSeq());
		map().setCarrierNm(source.getCarrier().getCarrierNm());
		map().setUserSeq(source.getUser().getUserSeq());
		map().setUserNm(source.getUser().getUserNm());
		map().setWorkGroupNm(source.getWorkGroup().getWorkGroupPk().getWorkGroupNm());
	}
}