const { restaurantTypeService } = require("../services");

/** create RestaurantType */
const createRestaurantType = async (req, res) => {
  try {
    const reqBody = req.body;
    const restaurantType = await restaurantTypeService.createRestaurantType(reqBody);
    if (!restaurantType) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "RestaurantType create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get RestaurantType list */
const getRestaurantTypeList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { restaurantType_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await restaurantTypeService.getRestaurantTypeList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get restaurantType list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Delete RestaurantType */
const deleteRestaurantType = async (req, res) => {
  try {
    const restaurantTypeId = req.params.restaurantTypeId;
    const restaurantTypeExists = await restaurantTypeService.getRestaurantTypeById(restaurantTypeId);
    if (!restaurantTypeExists) {
      throw new Error("RestaurantType not found!");
    }
    await restaurantTypeService.deleteRestaurantType(restaurantTypeId);

    res.status(200).json({
      success: true,
      message: "RestaurantType delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update RestaurantType */
const updateRestaurantType = async (req, res) => {
  try {
    const reqBody = req.body;
    const restaurantTypeId = req.params.restaurantTypeId;
    const restaurantTypeExists = await restaurantTypeService.getRestaurantTypeById(restaurantTypeId);
    if (!restaurantTypeExists) {
      throw new Error("RestaurantType not found!");
    }
    await restaurantTypeService.updateDetails(restaurantTypeId,reqBody);

    res.status(200).json({
      success: true,
      message: "RestaurantType update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createRestaurantType,
  getRestaurantTypeList,
  deleteRestaurantType,
  updateRestaurantType
};