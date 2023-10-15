const { restaurantService } = require("../services");

/** create Restaurant */
const createRestaurant = async (req, res) => {
  try {
    const reqBody = req.body;
    const restaurant = await restaurantService.createRestaurant(reqBody);
    if (!restaurant) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Restaurant create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Restaurant list */
const getRestaurantList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { restaurant_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await restaurantService.getRestaurantList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get restaurant list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Delete Restaurant */
const deleteRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurantExists = await restaurantService.getRestaurantById(restaurantId);
    if (!restaurantExists) {
      throw new Error("Restaurant not found!");
    }
    await restaurantService.deleteRestaurant(restaurantId);

    res.status(200).json({
      success: true,
      message: "Restaurant delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update Restaurant */
const updateRestaurant = async (req, res) => {
  try {
    const reqBody = req.body;
    const restaurantId = req.params.restaurantId;
    const restaurantExists = await restaurantService.getRestaurantById(restaurantId);
    if (!restaurantExists) {
      throw new Error("Restaurant not found!");
    }
    await restaurantService.updateDetails(restaurantId,reqBody);

    res.status(200).json({
      success: true,
      message: "Restaurant update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createRestaurant,
  getRestaurantList,
  deleteRestaurant,
  updateRestaurant
};