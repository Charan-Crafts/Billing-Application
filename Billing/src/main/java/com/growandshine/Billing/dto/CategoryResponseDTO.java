package com.growandshine.Billing.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CategoryResponseDTO {


    private String categoryId;

    private String categoryName;

    private String description;

    private String imageUrl; // S3 image url

    private Timestamp createdAt;

    private Timestamp updatedAt;

}
