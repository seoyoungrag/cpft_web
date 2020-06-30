package kr.co.teamfresh.cpft.capi.config.modelmap.converter;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;

import kr.co.teamfresh.cpft.capi.config.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.capi.entity.carrier.WorkGroup;
import kr.co.teamfresh.cpft.capi.entity.carrier.WorkGroupPK;
import kr.co.teamfresh.cpft.capi.entity.order.Order;

public class OrderDtoToOrderEnCv implements Converter<OrderDTO, Order> {

	@Override
	public Order convert(MappingContext<OrderDTO, Order> context) {
		
    	WorkGroup wg = new WorkGroup();
    	WorkGroupPK workGroupPK = new WorkGroupPK(context.getSource().getCarrierSeq(), context.getSource().getWorkGroupNm());
    	wg.setWorkGroupPk(workGroupPK);
    	context.getDestination().setWorkGroup(wg);
    	return context.getDestination();
	}

}
