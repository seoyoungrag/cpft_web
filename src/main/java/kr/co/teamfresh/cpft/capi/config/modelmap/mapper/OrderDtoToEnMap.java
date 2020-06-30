package kr.co.teamfresh.cpft.capi.config.modelmap.mapper;

import org.modelmapper.PropertyMap;

import kr.co.teamfresh.cpft.capi.config.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.capi.entity.Carrier;
import kr.co.teamfresh.cpft.capi.entity.User;
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
		using(ctx -> generateCarrer(((OrderDTO)ctx.getSource()).getCarrierSeq())).map(source, destination.getCarrier());
		using(ctx -> generateUser(((OrderDTO)ctx.getSource()).getUserSeq())).map(source, destination.getUser());
	}

	private User generateUser(String userSeq) {
		User c = new User();
		c.setUserSeq(userSeq);
		return c;
	}

	private Carrier generateCarrer(String carrierSeq) {
		Carrier c = new Carrier();
		c.setCarrierSeq(carrierSeq);
		return c;
	}

	private WorkGroup generateWorkGroup(String carrierSeq, String workGroup) {
    	WorkGroup wg = new WorkGroup();
    	WorkGroupPK workGroupPK = new WorkGroupPK(carrierSeq, workGroup);
    	wg.setWorkGroupPk(workGroupPK);
    	return wg;
	}
}