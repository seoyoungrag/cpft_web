package kr.co.teamfresh.cpft.capi.advice.exception;

public class CUserLoginIdDuplicatedException extends RuntimeException {

	public CUserLoginIdDuplicatedException(String msg, Throwable t) {
		super(msg, t);
	}

	public CUserLoginIdDuplicatedException(String msg) {
		super(msg);
	}

	public CUserLoginIdDuplicatedException() {
		super();
	}

}
