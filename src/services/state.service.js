const { State } = require("../models");

// state
const createState = async (reqBody) => {
  return State.create(reqBody);
};

// Get state list
const getStateList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return State.find();
};

// Get state by name
const getStateByName = async (state_name) => {
  return State.findOne({ state_name });
};

// Get State details by id
const getStateById = async (stateId) => {
  return State.findById(stateId);
};


// update State
const updateDetails = async (stateId, reqBody) => {
  return State.findByIdAndUpdate(stateId, { $set: reqBody });
};

// Delete state
const deleteState = async (stateId) => {
  return State.findByIdAndDelete(stateId);
};

module.exports = {
    createState,
    getStateList,
    getStateByName,
    getStateById,
    updateDetails,
    deleteState
}