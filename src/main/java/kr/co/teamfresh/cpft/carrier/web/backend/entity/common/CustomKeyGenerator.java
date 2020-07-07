package kr.co.teamfresh.cpft.carrier.web.backend.entity.common;

public class CustomKeyGenerator {
	public static Object create(Object o1, Object o2) {
		return "FRONT:" + o1 + ":" + o2;
	}
}