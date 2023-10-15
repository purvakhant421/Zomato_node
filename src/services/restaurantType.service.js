const { RestaurantType } = require("../models");

//create restaurantType
const createRestaurantType = async (reqBody) => {
  return RestaurantType.create(reqBody);
};

// Get RestaurantType list
const getRestaurantTypeList = async (filter,options) => {
    return RestaurantType.find();
};

// Get restaurantType by name
const getRestaurantTypeByName = async (restaurantType_name) => {
  return RestaurantType.findOne({ restaurantType_name });
};

// Get restaurantType details by id
const getRestaurantTypeById = async (restaurantTypeId) => {
  return RestaurantType.findById(restaurantTypeId);
};

// update restaurantType
const updateDetails = async (restaurantTypeId, reqBody) => {
  return RestaurantType.findByIdAndUpdate(restaurantTypeId, { $set: reqBody });
};

// Delete restaurantType
const deleteRestaurantType = async (restaurantTypeId) => {
  return RestaurantType.findByIdAndDelete(restaurantTypeId);
};

module.exports = {
    createRestaurantType,
    getRestaurantTypeList,
    getRestaurantTypeByName,
    getRestaurantTypeById,
    updateDetails,
    deleteRestaurantType
}