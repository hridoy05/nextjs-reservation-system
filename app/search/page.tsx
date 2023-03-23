import { PrismaClient } from "@prisma/client";
import React from "react";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient();
interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: string;
}

const fetchRestaurantsByCity = (searchParams: SearchParams) => {
  const where: any = {};
  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }
  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    slug: true,
    location: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocation = async () => {
  return prisma.location.findMany();
};
const fetchCuiSines = async () => {
  return prisma.cuisine.findMany();
};

const Search = async ({ searchParams }: { searchParams: SearchParams }) => {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const locations = await fetchLocation();
  const cuisines = await fetchCuiSines();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
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
