package kr.co.teamfresh.cpft.capi.advice.exception;

public class PasswordNotMatchedException extends RuntimeException {
    public PasswordNotMatchedException(String msg, Throwable t) {
        super(msg, t);
    }

    public PasswordNotMatchedException(String msg) {
        super(msg);
    }

    public PasswordNotMatchedException() {
        super();
    }
}