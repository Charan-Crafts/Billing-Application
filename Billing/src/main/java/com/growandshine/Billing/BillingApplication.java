package com.growandshine.Billing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BillingApplication {

    public static void main(String[] args) {

        SpringApplication.run(BillingApplication.class, args);

        String re =hello();

        System.out.println(re);

    }

    public static  String hello() {
        return "Okay";
    }
}
