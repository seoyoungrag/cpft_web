package kr.co.teamfresh.cpft.carrier.web.backend.advice.exception;

public class CAuthenticationEntryPointException extends RuntimeException {

	public CAuthenticationEntryPointException(String msg, Throwable t) {
		super(msg, t);
	}

	public CAuthenticationEntryPointException(String msg) {
		super(msg);
	}

	public CAuthenticationEntryPointException() {
		super();
	}

}
