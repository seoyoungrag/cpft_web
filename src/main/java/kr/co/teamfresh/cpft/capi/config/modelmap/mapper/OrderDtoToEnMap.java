package kr.co.teamfresh.cpft.capi.config.modelmap.mapper;

import org.modelmapper.PropertyMap;

import kr.co.teamfresh.cpft.capi.config.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.capi.entity.carrier.WorkGroup;
import kr.co.teamfresh.cpft.capi.entity.carrier.WorkGroupPK;
import kr.co.teamfresh.cpft.capi.entity.order.Order;

public class OrderDtoToEnMap extends PropertyMap<OrderDTO, Order> {
	@Override
	protected void configure() {
		using(ctx -> generateWorkGroup(
				((OrderDTO) ctx.getSource()).getCarrierSeq(),
				((OrderDTO) ctx.getSource()).getWorkGroupNm())
				).map(source, destination.getWorkGroup());
	}

	private WorkGroup generateWorkGroup(String carrierSeq, String workGroup) {
    	WorkGroup wg = new WorkGroup();
    	WorkGroupPK workGroupPK = new WorkGroupPK(carrierSeq, workGroup);
    	wg.setWorkGroupPk(workGroupPK);
    	return wg;
	}
}