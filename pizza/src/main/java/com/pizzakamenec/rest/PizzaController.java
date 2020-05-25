package com.pizzakamenec.rest;

import com.pizzakamenec.model.Pizza;
import com.pizzakamenec.repository.PizzaRepository;
import com.pizzakamenec.repository.PizzaRepositoryImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/pizzas")
@Api(value = "pizza resources", description = "Operations with pizza-entity")
public class PizzaController {


    private final PizzaRepositoryImpl pizzaRepository;
    private final PizzaRepository pizzaRepo;

    @Autowired
    public PizzaController(PizzaRepositoryImpl pizzaRepository,PizzaRepository pizzaRepo) {
        this.pizzaRepository = pizzaRepository;
        this.pizzaRepo = pizzaRepo;
    }


    @ApiOperation(value = "Find all pizzas", response = List.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully retrieved list of pizza"),
            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })
    @GetMapping(value = "/", produces = "application/json")
    public List<Pizza> findAll() {
        return pizzaRepository.findAll();
    }



    @ApiOperation(value = "Find pizza by title", response = Pizza.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully retrieved a pizza"),
            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })
    @GetMapping(value = "/{title}", produces = "application/json")
    public Pizza findPizzaByTitle(@PathVariable("title") String title) {
        return pizzaRepository.findByTitle(title);
    }



    @ApiOperation(value = "Find pizzas by price", response = List.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully retrieved list of pizza by prices"),
            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })
    @GetMapping(value = "/prices", produces = "application/json")
    public List<Pizza> searchPizzaByPrice(@RequestParam("beginPrice") BigDecimal beginPrice,
                                          @RequestParam("endPrice") BigDecimal endPrice) {
        return pizzaRepository.searchByCost(beginPrice, endPrice);
    }



    @ApiOperation(value = "Create pizza", response = void.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully added pizza"),
            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })
    @PostMapping(value = "/")
    public void savePizza(@RequestBody Pizza pizza) {
        pizzaRepository.save(pizza);
    }



    @ApiOperation(value = "Update pizza by id", response = void.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully updated pizza"),
            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })
    @PutMapping("/{pizzaId}")
    public void updatePizza(@RequestBody Pizza pizza, @PathVariable("pizzaId") String pizzaId) {
        pizza.setId(pizzaId);
        pizzaRepository.update(pizza);
    }



    @ApiOperation(value = "Delete pizza by id", response = void.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully deleted pizza"),
            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })
    @DeleteMapping("/{pizzaId}")
    public void deletePizza(@PathVariable("pizzaId") String pizzaId) {
        pizzaRepository.deleteById(pizzaId);
    }



}
