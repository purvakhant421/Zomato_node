const express = require("express");
const validate = require("../middlewares/validate");
const { reviewController } = require("../controllers");
const { reviewValidation } = require("../validations");

const router = express.Router();

/**create review */
router.post(
  "/createReview",
  validate(reviewValidation.createReview),
  reviewController.createReview
);

/**get review list */
router.get(
    "/getReviewList",
    reviewController.getReviewList
);

/**get review details */
router.get(
    "/getReviewDetails/:reviewId",
    reviewController.getReviewDetails
);

/**update review */
router.put(
    "/updateReview/:reviewId",
    reviewController.updateReview
);

/**delete review */
router.delete(
    "/deleteReview/:reviewId",
    reviewController.deleteReview
);

module.exports = router;