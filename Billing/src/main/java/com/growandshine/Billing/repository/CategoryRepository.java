package com.growandshine.Billing.repository;


import com.growandshine.Billing.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category,Long> {

    Optional<Category>  findByCategoryId(String id);
}
