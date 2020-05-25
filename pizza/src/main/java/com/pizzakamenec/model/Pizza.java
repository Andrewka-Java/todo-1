package com.pizzakamenec.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

import java.math.BigDecimal;

@Document(collection = "pizza")
@ApiModel(value = "class Pizza")
public class Pizza {

    @Id
    private String id;
    @ApiModelProperty(value = "Title of pizza", example = "Pepperoni")
    private String title;
    @ApiModelProperty(value = "Description of pizza")
    private String description;
    @Field(targetType = FieldType.DECIMAL128)
    @ApiModelProperty(value = "Price per pizza", example = "10.25")
    private BigDecimal cost;


    public Pizza() {
    }

    public Pizza(String title, String description, BigDecimal cost) {
        this.title = title;
        this.description = description;
        this.cost = cost;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    @Override
    public String toString() {
        return "Pizza{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", cost=" + cost +
                '}';
    }
}
