package com.growandshine.Billing.service;

import com.growandshine.Billing.dto.CategoryRequestDTO;
import com.growandshine.Billing.dto.CategoryResponseDTO;
import com.growandshine.Billing.models.Category;
import com.growandshine.Billing.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Random;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    private final FileUploadService fileUploadService;

    public ResponseEntity<CategoryResponseDTO> addCategory(CategoryRequestDTO request ,MultipartFile file) throws IOException {

        // Create a method that will take the CategoryRequest as the param and give the Category Entity as response


        // Store the file in s3

        String imageUrl = fileUploadService.uploadFile(file);

        Category newCategpry = convertRequestToCategory(request);

        newCategpry.setImageUrl(imageUrl);

        Category response = categoryRepository.save(newCategpry);



        CategoryResponseDTO responseDTO = convertCategoryToResponse(response);

        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }

    private CategoryResponseDTO convertCategoryToResponse(Category response) {

        return   CategoryResponseDTO.builder()
                .categoryId(response.getCategoryId())
                .categoryName(response.getCategoryName())
                .description(response.getDescription())
                .imageUrl(response.getImageUrl())
                .createdAt(response.getCreatedAt())
                .updatedAt(response.getUpdatedAt())
                .build();
    }

    private Category convertRequestToCategory(CategoryRequestDTO request) {

        return Category.builder()
                .categoryId(UUID.randomUUID().toString())
                .categoryName(request.getCategoryName())
                .description(request.getDescription())
                .build();
    }

    public List<CategoryResponseDTO> getAll() {

        List<Category> allCategories = categoryRepository.findAll();

        // Convert the category into the category Response

        List<CategoryResponseDTO> response = allCategories
                .stream()
                .map(
                        eachCategory->convertCategoryToResponse(eachCategory)

                )
                .collect(Collectors.toList());

        return response;
    }

    public ResponseEntity<String> deleteCategory(String id) {

        Category category =categoryRepository.findByCategoryId(id).orElse(null);

        if(category==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Delete

        // Delete file from s3

       if(category.getImageUrl()!=null){
           fileUploadService.deleteFile(category.getImageUrl());
       }

        categoryRepository.delete(category);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
