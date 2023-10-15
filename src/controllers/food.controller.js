const { foodService } = require("../services");

/** create food */
const createFood = async (req, res) => {
  try {
    const reqBody = req.body;
    const food = await foodService.createFood(reqBody);
    if (!food) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Food create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Food list */
const getFoodList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { food_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await foodService.getFoodList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Food list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Delete Food */
const deleteFood = async (req, res) => {
  try {
    const foodId = req.params.foodId;
    const foodExists = await foodService.getFoodById(foodId);
    if (!foodExists) {
      throw new Error("Food not found!");
    }
    await foodService.deleteFood(foodId);

    res.status(200).json({
      success: true,
      message: "Food delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update Food */
const updateFood = async (req, res) => {
  try {
    const reqBody = req.body;
    const foodId = req.params.foodId;
    const foodExists = await foodService.getFoodById(foodId);
    if (!foodExists) {
      throw new Error("Food not found!");
    }
    await foodService.updateDetails(foodId,reqBody);

    res.status(200).json({
      success: true,
      message: "Food update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createFood,
  getFoodList,
  deleteFood,
  updateFood
};