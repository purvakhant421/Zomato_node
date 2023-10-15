const { stateService } = require("../services");

/** create state */
const createState = async (req, res) => {
  try {
    const reqBody = req.body;
    const state = await stateService.createState(reqBody);
    if (!state) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "State create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get State list */
const getStateList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { state_name: { $regex: search, $options: "i" } },

      ];
    }
    const getList = await stateService.getStateList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get state list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete state*/
const deleteState = async (req, res) => {
  try {
    const stateId = req.params.stateId;
    const stateExists = await stateService.getStateById(stateId);
    if (!stateExists) {
      throw new Error("State not found!");
    }
    await stateService.deleteState(stateId);

    res.status(200).json({
      success: true,
      message: "City delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update state */
const updateState = async (req, res) => {
  try {
    const reqBody = req.body;
    const stateId = req.params.stateId;
    const stateExists = await stateService.getStateById(stateId);
    if (!stateExists) {
      throw new Error("State not found!");
    }
    await stateService.updateDetails(stateId,reqBody);

    res.status(200).json({
      success: true,
      message: "State update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createState,
  getStateList,
  deleteState,
  updateState
};