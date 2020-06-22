package kr.co.teamfresh.cpft.capi.config.modelmap;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperBean {
	
    @Bean
    public ModelMapper modelMapper() {
    	ModelMapper m = new ModelMapper();
    	m.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return m;
    }


}