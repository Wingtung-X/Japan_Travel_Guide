package com.example.travel_guide;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.example.travel_guide")

@EnableJpaRepositories (basePackages = "com.example.travel_guide")
public class TravelGuideApplication {

    public static void main(String[] args) {
        SpringApplication.run(TravelGuideApplication.class, args);
    }

}
