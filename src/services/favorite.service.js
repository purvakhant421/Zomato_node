const { Favorite } = require("../models");

/**create favorite */
const createFavorite = async (reqBody) => {
    return Favorite.create(reqBody);
}

/**get favorite list */
const getFavoriteList = async (req, res) => {
    return Favorite.find().populate({path: "userId", select: "user_name , preferences"})
                          .populate({path: "restaurantId", select: "name , location"})
                          .populate({path: "menuItemsId", select: "name , price"});
}

/**get favorite by id */
const getFavoriteById = async (favoriteId) => {
    return Favorite.findById(favoriteId);
}

/**update record */
const updateFavorite = async (favoriteId, updateBody) => {
    return Favorite.findByIdAndUpdate(favoriteId, { $set: updateBody })
}

/**delete Favorite */
const deleteFavorite = async (favoriteId) => {
    return Favorite.findByIdAndDelete(favoriteId);
}

module.exports = {
    createFavorite,
    getFavoriteById,
    getFavoriteList,
    updateFavorite,
    deleteFavorite
}