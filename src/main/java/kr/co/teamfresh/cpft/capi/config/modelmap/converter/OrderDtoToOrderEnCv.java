package kr.co.teamfresh.cpft.capi.config.modelmap.converter;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;

import kr.co.teamfresh.cpft.capi.config.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.capi.entity.carrier.WorkGroupManager;
import kr.co.teamfresh.cpft.capi.entity.carrier.WorkGroupManagerPK;
import kr.co.teamfresh.cpft.capi.entity.order.Order;

public class OrderDtoToOrderEnCv implements Converter<OrderDTO, Order> {

	@Override
	public Order convert(MappingContext<OrderDTO, Order> context) {
		
    	WorkGroupManager wg = new WorkGroupManager();
    	WorkGroupManagerPK workGroupManagerPK = new WorkGroupManagerPK(context.getSource().getCarrierSeq(), context.getSource().getWorkGroupNm(), context.getSource().getWorkGroupManager());
    	wg.setWorkGroupManagerPK(workGroupManagerPK);
    	context.getDestination().setWorkGroupManager(wg);
    	return context.getDestination();
	}

}
