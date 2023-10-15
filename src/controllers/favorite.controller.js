const { favoriteService } = require("../services");

/**create record */
const createFavorite = async (req, res) => {
    try {
        const reqBody = req.body;
        const favorite = await favoriteService.createFavorite(reqBody);
        if (!favorite) {
            throw new Error("Favorite list not found..!");
        }

        res.status(200).json({
            success: true,
            message: "Favorite list created successfully..!",
            data: favorite
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something wents wrong..!"
        });
    }
}

/**get favorite list */
const getFavoriteList = async (req, res) => {
    try {
        const getList = await favoriteService.getFavoriteList();
        if (!getList) {
            throw new Error("Favorite list not found...!");
        }

        res.status(200).json({
            success: true,
            message: "Favorite list get successfully...!",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong..!"
        });
    }
}

/**get favorites by details */
const getFavoriteDetails = async (req, res) => {
    try {
        const favoriteId = req.params.favoriteId;
        const favoriteEx = await favoriteService.getFavoriteById(favoriteId);
        if (!favoriteEx) {
            throw new Error("Favorite details not found...!");
        }

        res.status(200).json({
            success: true,
            message: "Favorite details get successsfully...!",
            data: favoriteEx
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong..!"
        });
    }
}

/**update favorite details */
const updateFavorite = async (req, res) => {
    try {
        const favoriteId = req.params.favoriteId
        const favoriteExist = await favoriteService.getFavoriteById(favoriteId);
        if (!favoriteExist) {
            throw new Error("Favorite list not found...!");
        }

        await favoriteService.updateFavorite(favoriteId, req.body);

        res.status(200).json({
            success: true,
            message: "Favorite list updated successfully...!",
            data: favoriteExist
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong...!"
        });
    }
}

/**delete favorite */
const deleteFavorite = async (req, res) => {
    try {
        const favoriteId = req.params.favoriteId;
        const favoriteExists = await favoriteService.getFavoriteById(favoriteId);
        if (!favoriteExists) {
            throw new Error("Favorite list not found..!");
        }

        await favoriteService.deleteFavorite(favoriteId);

        res.status(200).json({
            success: true,
            message: "favorite data deleted successfully..!"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong ..!"
        });
    }
}

module.exports = {
    createFavorite,
    getFavoriteDetails,
    getFavoriteList,
    updateFavorite,
    deleteFavorite
}