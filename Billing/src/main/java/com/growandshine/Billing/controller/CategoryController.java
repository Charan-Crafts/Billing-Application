package com.growandshine.Billing.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.growandshine.Billing.dto.CategoryRequestDTO;
import com.growandshine.Billing.dto.CategoryResponseDTO;
import com.growandshine.Billing.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CategoryController {

    private final CategoryService categoryService;



    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<CategoryResponseDTO> addCategory(
            @RequestPart("category") CategoryRequestDTO request,
            @RequestPart("image") MultipartFile file
            ) throws IOException {

        return categoryService.addCategory(request,file);
    }

    @GetMapping
    public List<CategoryResponseDTO> getAllCategories(){
        return categoryService.getAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable String id){

        return categoryService.deleteCategory(id);
    }
}
