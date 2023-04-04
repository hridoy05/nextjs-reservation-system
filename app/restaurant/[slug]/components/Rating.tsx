import { Review } from "@prisma/client";
import React from "react";
import { calculateReviewRatingAverage } from "../../../../utils/calculateReviewTaingAverage";
import Stars from "../../../components/Stars";

const Rating = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3">
          {calculateReviewRatingAverage(reviews).toFixed(2)}
        </p>
      </div>
      <div>
        <p className="text-reg ml-4">{reviews.length}</p>
      </div>
    </div>
  );
};

export default Rating;
