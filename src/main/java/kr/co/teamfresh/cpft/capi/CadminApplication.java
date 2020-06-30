package kr.co.teamfresh.cpft.capi;

import java.net.MalformedURLException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.baroservice.api.BarobillApiProfile;
import com.baroservice.api.BarobillApiService;

@EnableCaching
@SpringBootApplication
public class CadminApplication {

	public static void main(String[] args) {
		SpringApplication.run(CadminApplication.class, args);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return PasswordEncoderFactories.createDelegatingPasswordEncoder();
	}
	
	@Bean
	public BarobillApiService barobillApiService() throws MalformedURLException {
		return new BarobillApiService(BarobillApiProfile.TESTBED);
	}
}
