const { City } = require("../models");

// city
const createCity = async (reqBody) => {
  return City.create(reqBody);
};

// Get city list
const getCityList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return City.find();
};

// Get City by name
const getCityByName = async (city_name) => {
  return City.findOne({ city_name });
};

// Get City details by id
const getCityById = async (cityId) => {
  return City.findById(cityId);
};

// update City
const updateDetails = async (cityId, reqBody) => {
  return City.findByIdAndUpdate(cityId, { $set: reqBody });
};

// Delete city
const deleteCity = async (cityId) => {
  return City.findByIdAndDelete(cityId);
};

module.exports = {
    createCity,
    getCityList,
    getCityByName,
    getCityById,
    updateDetails,
    deleteCity
}