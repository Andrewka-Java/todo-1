package com.pizzakamenec.repository;

import com.pizzakamenec.model.Pizza;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public class PizzaRepositoryImpl {

    @Autowired
    private MongoTemplate mongoOperations;


    public List<Pizza> findAll() {
        return mongoOperations.findAll(Pizza.class);
    }


    public Pizza findById(Pizza pizza) {
        Query pizzaQuery = new Query();
        pizzaQuery.addCriteria(Criteria.where("id").is(pizza.getId()));

        return mongoOperations.findOne(pizzaQuery, Pizza.class);
    }


    public Pizza findByTitle(String title) {
        Query query = new Query();
        query.addCriteria(Criteria.where("title").is(title));

        return mongoOperations.findOne(query, Pizza.class);
    }

    public List<Pizza> searchByCost(BigDecimal beginPrice, BigDecimal endPrice) {
        Query query = new Query();
        query.addCriteria(
                        Criteria.where("cost")
                                .gt(beginPrice)
                        .andOperator(Criteria.where("cost")
                                .lt(endPrice)));

        List<Pizza> pizzas = mongoOperations.find(query, Pizza.class);
        return pizzas;
    }

    public void save(Pizza pizza) {
        mongoOperations.save(pizza);
    }


    public void update(Pizza pizza) {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(pizza.getId()));

        Update update = new Update();
        update.set("title", pizza.getTitle());
        update.set("description", pizza.getDescription());
        update.set("cost", pizza.getCost());

        mongoOperations.findAndModify(query, update, Pizza.class);
    }


    public void deleteById(String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        mongoOperations.remove(query, Pizza.class);
    }

}
