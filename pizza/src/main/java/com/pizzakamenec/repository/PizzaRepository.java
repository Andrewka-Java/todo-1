package com.pizzakamenec.repository;

import com.pizzakamenec.model.Pizza;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaRepository extends MongoRepository<Pizza, String> {

    Pizza findByTitle(String title);

}
