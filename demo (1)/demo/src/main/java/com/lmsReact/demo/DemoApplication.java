package com.lmsReact.demo;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {

		SpringApplication.run(DemoApplication.class, args);

	}
/////////////////////////
	@Bean   //model mapper should inject as Bean type
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

}
