const mongoose = require("mongoose");
const config = require("../config/config");

const restaurantSchema = mongoose.Schema(
  {
    restaurant_name: {
      type: String,
      trim: true,
    },
    restaurant_address: {
      type: String,
      trim: true,
    },
    restaurant_number: {
        type: Number,
        default : 0,
      },
    restaurant_address: {
        type: String,
        trim: true,
      },
    restaurant_image: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.restaurant_image) {
          data.restaurant_image = `${config.base_url}restaurant_images/${data.restaurant_image}`;
        }
      },
    },
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;