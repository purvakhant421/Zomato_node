const { Country } = require("../models");

// country
const createCountry = async (reqBody) => {
  return Country.create(reqBody);
};

// Get country list
const getCountryList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Country.find();
};

// Get Country by name
const getCountryByName = async (country_name) => {
  return Country.findOne({ country_name });
};

// Get Country details by id
const getCountryById = async (countryId) => {
  return Country.findById(countryId);
};

// update Country
const updateDetails = async (countryId, reqBody) => {
  return Country.findByIdAndUpdate(countryId, { $set: reqBody });
};

// Delete country
const deleteCountry = async (countryId) => {
  return Country.findByIdAndDelete(countryId);
};

module.exports = {
    createCountry,
    getCountryList,
    getCountryByName,
    getCountryById,
    updateDetails,
    deleteCountry
}