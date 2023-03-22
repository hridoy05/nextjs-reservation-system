import { PrismaClient } from "@prisma/client";
import React from "react";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient();

const fetchRestaurantsByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    slug: true,
    location: true,
  };
  if (!city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
    select,
  });
};

const Search = async ({ searchParams }: { searchParams: { city: string } }) => {
  const restaurants = await fetchRestaurantsByCity(
    searchParams.city.toLowerCase()
  );
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <RestaurantCard restaurant={restaurant} />
              ))}
            </>
          ) : (
            <p>Sorry no restaurant found in this city</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
