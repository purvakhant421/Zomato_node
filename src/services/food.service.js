const { Food } = require("../models");

//create Food
const createFood = async (reqBody) => {
  return Food.create(reqBody);
};

// Get Food list
const getFoodList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Food.find();
};

// Get Food by name
const getFoodByName = async (food_name) => {
  return Food.findOne({ food_name });
};

// Get Food details by id
const getFoodById = async (foodId) => {
  return Food.findById(foodId);
};

// update food
const updateDetails = async (foodId, reqBody) => {
  return Food.findByIdAndUpdate(foodId, { $set: reqBody });
};

// Delete Food
const deleteFood = async (foodId) => {
  return Food.findByIdAndDelete(foodId);
};

module.exports = {
    createFood,
    getFoodList,
    getFoodByName,
    getFoodById,
    updateDetails,
    deleteFood
}