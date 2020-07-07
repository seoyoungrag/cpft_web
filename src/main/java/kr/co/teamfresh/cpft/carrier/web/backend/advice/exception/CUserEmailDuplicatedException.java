package kr.co.teamfresh.cpft.carrier.web.backend.advice.exception;

public class CUserEmailDuplicatedException extends RuntimeException {

	public CUserEmailDuplicatedException(String msg, Throwable t) {
		super(msg, t);
	}

	public CUserEmailDuplicatedException(String msg) {
		super(msg);
	}

	public CUserEmailDuplicatedException() {
		super();
	}

}
