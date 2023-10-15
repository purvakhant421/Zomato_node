const express = require("express");
const validate = require("../middlewares/validate");
const { favoriteValidation } = require("../validations");
const { favoriteController } = require("../controllers");

const router = express.Router();

/**create favorite */
router.post(
    "/create-Favorite",
    validate(favoriteValidation.createFavorite),
    favoriteController.createFavorite
);

/**get favorite list*/
router.get(
    "/Favorite-List",
    favoriteController.getFavoriteList
);

/**get favorite details*/
router.get(
    "/favorite-Details/:favoriteId",
    favoriteController.getFavoriteDetails
);

/**update favorite*/
router.put(
    "/update/:favoriteId",
    favoriteController.updateFavorite
);

/**delete favorite */
router.delete(
    "/delete/:favoriteId",
    favoriteController.deleteFavorite
);

module.exports = router