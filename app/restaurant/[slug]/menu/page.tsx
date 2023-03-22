import { PrismaClient } from "@prisma/client";
import React from "react";
import Menu from "../components/Menu";
import RestaurantNavbar from "../components/RestaurantNavbar";

const prisma = new PrismaClient();

const fetchItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!restaurant) {
    throw new Error();
  }
  return restaurant.items;
};

const RestaurentMenu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchItems(params.slug);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  );
};

export default RestaurentMenu;
