const { countryService } = require("../services");

/** create country */
const createCountry = async (req, res) => {
  try {
    const reqBody = req.body;
    const country = await countryService.createCountry(reqBody);
    if (!country) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Country create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get country list */
const getCountryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Country_name: { $regex: search, $options: "i" } },
        { Country_number : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await countryService.getCountryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get country list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Delete country */
const deleteCountry = async (req, res) => {
  try {
    const countryId = req.params.countryId;
    const countryExists = await countryService.getCountryById(countryId);
    if (!countryExists) {
      throw new Error("Country not found!");
    }
    await countryService.deleteCountry(countryId);

    res.status(200).json({
      success: true,
      message: "Country delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update country */
const updateCountry = async (req, res) => {
  try {
    const reqBody = req.body;
    const countryId = req.params.countryId;
    const countryExists = await countryService.getCountryById(countryId);
    if (!countryExists) {
      throw new Error("Country not found!");
    }
    await countryService.updateDetails(countryId,reqBody);

    res.status(200).json({
      success: true,
      message: "Country update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createCountry,
  getCountryList,
  deleteCountry,
  updateCountry
};