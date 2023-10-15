const { Restaurant } = require("../models");

//create restaurant
const createRestaurant = async (reqBody) => {
  return Restaurant.create(reqBody);
};

// Get Restaurant list
const getRestaurantList = async (filter,options) => {
    return Restaurant.find();
};

// Get restaurant by name
const getRestaurantByName = async (restaurant_name) => {
  return Restaurant.findOne({ restaurant_name });
};

// Get restaurant details by id
const getRestaurantById = async (restaurantId) => {
  return Restaurant.findById(restaurantId);
};

// update restaurant
const updateDetails = async (restaurantId, reqBody) => {
  return Restaurant.findByIdAndUpdate(restaurantId, { $set: reqBody });
};

// Delete restaurant
const deleteRestaurant = async (restaurantId) => {
  return Restaurant.findByIdAndDelete(restaurantId);
};

module.exports = {
    createRestaurant,
    getRestaurantList,
    getRestaurantByName,
    getRestaurantById,
    updateDetails,
    deleteRestaurant
}