import { Cuisine, PRICE, Location, Review } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { calculateReviewRatingAverage } from "../../../utils/calculateReviewTaingAverage";
import Price from "../../components/Price";

interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  slug: string;
  location: Location;
  reviews: Review[];
}
console.log("render");

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);
    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 1) return "Averager";
    else "";
  };
  return (
    <div className="border-b flex pb-5">
      <img src={restaurant.main_image} alt="" className="w-44 h-36 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4">{restaurant.cuisine.name}</p>
            <p className="mr-4">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
