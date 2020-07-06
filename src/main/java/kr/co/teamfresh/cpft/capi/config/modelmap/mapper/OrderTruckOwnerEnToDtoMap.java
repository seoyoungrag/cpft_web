package kr.co.teamfresh.cpft.capi.config.modelmap.mapper;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.modelmapper.PropertyMap;

import kr.co.teamfresh.cpft.capi.config.dto.order.OrderTruckOwnerDTO;
import kr.co.teamfresh.cpft.capi.config.dto.truckOwner.TruckDTO;
import kr.co.teamfresh.cpft.capi.entity.Truck;
import kr.co.teamfresh.cpft.capi.entity.order.OrderTruckOwner;

public class OrderTruckOwnerEnToDtoMap extends PropertyMap<OrderTruckOwner, OrderTruckOwnerDTO> {
	@Override
	protected void configure() {
		map(source.getOrderTruckOwnerPK().getOrder()).setOrder(null);
		map(source.getOrderTruckOwnerPK().getTruckOnwer()).setTruckOwner(null);
	}

	private List<TruckDTO> generateTruck(Set<Truck> trucks) {
		List<TruckDTO> rtnList = new ArrayList<>();
		Iterator<Truck> it = trucks.iterator();
		while(it.hasNext()) {
			Truck t = it.next();
			TruckDTO dto = new TruckDTO();
			dto.setCarType(t.getTruckPK().getCarType());
			dto.setTonType(t.getTruckPK().getTonType());
			rtnList.add(dto);
		}
		return rtnList;
	}

}