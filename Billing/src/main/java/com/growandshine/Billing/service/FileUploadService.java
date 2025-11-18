package com.growandshine.Billing.service;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectResponse;

import java.io.IOException;
import java.util.UUID;
@RequiredArgsConstructor
@Service
public class FileUploadService {

    @Value("${aws.bucket.name}")
    private String bucketName;

    private final S3Client s3Client;

    public String uploadFile(MultipartFile file) throws IOException {

        // Get the file Extension

        String fileExtension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")+1);

        // Key for fileName

        String key = UUID.randomUUID().toString();

        // FileName

        String fileName = key+"."+fileExtension;

        // Now put the image into the Bucket

        PutObjectRequest putObjectRequest= PutObjectRequest.builder()
                .bucket(bucketName)
                .key(fileName)
                .acl("public-read")
                .contentType(file.getContentType())
                .build();

        PutObjectResponse response = s3Client.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));

        if(response.sdkHttpResponse().isSuccessful()){
            return "https://"+bucketName+".s3.amazonaws.com/"+fileName;
        }else{
            return "Error while Uploading the file in s3";
        }
    }

    public boolean deleteFile(String imageUrl){
        String fileName = imageUrl.substring(imageUrl.lastIndexOf("/")+1);
        DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
                .bucket(bucketName)
                .key(fileName)
                .build();

        s3Client.deleteObject(deleteObjectRequest);

        return true;
    }
}
