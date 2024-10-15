/* eslint-disable */
import { CardMedia, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import { Star } from "./Images/icons/Star";
import Link from "next/link";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import SwipeableCarousel from "./Carousel";

interface dataType {
  _id: string;
  name: string;
}
interface dataFoodType {
  _id: string;
  name: string;
  categoryId: {
    name: string;
    _id: string;
  };
  image: string;
  price: number;
  discount: number;
  ingredients: string[];
}
const CardsHome = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [data, setData] = useState<dataType[] | null>(null);
  const [foodData, setFoodData] = useState<dataFoodType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryRes = await fetch("https://food-be-three.vercel.app/api/category");
        const categoryData = await categoryRes.json();
        setData(categoryData.categories);

        const foodRes = await fetch("https://food-be-three.vercel.app/api/food");
        const foodData = await foodRes.json();
        setFoodData(foodData.foods);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterFoods = foodData ? foodData.filter(item => item.discount > 0) : [];
  const saleFoods = filterFoods.slice(0, 4);

  const filters = data? data.map(cat => {
    return foodData? foodData.filter(item => item.categoryId._id === cat._id): [];
  }) : [];

  const filterCategory = data ? data.filter(item => item.name) : [];
  const categories = filterCategory.map(cat => {
    return cat.name;
  })
  
  return (
    <Stack gap={{lg:"60px"}} marginBottom={5}>
      <Stack >
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
          <Stack direction={"row"} py={2}>
            <Star />
            <Typography fontSize={"22px"} fontWeight={"700"}>
              Хямдралтай
            </Typography>
          </Stack>
          <Link href={"menu"} style={{ textDecoration: "none" }}>
            <Typography fontSize={"14px"} color={"#18BA51"}>
              Бүгдийг харах
            </Typography>
          </Link>
        </Stack>
        {isMobile ? (<SwipeableCarousel items={saleFoods}/>) : (<Stack direction={"row"} gap={2}>
          {saleFoods.map(a => (
            <Stack key={a._id} gap={"14px"}  >
              <Stack position={"relative"} width={270}>
                <CardMedia component={"img"} src={a.image} width={270} height={185} alt="" />
                <Typography
                  px={2}
                  py={0.5}
                  border={"1.5px solid white"}
                  borderRadius={4}
                  fontWeight={"600"}
                  bgcolor={"#18BA51"}
                  color={"white"}
                  position={"absolute"}
               
                  marginLeft={24}
                >
                  {a.discount}%
                </Typography>
              </Stack>
              <Stack px={1.5}>
                <Typography fontSize={"18px"} fontWeight={"600"}>
                  {a.name}
                </Typography>
                <Stack direction={"row"} gap={1}>
                  <Typography fontSize={"18px"} fontWeight={"600"} color={"#18BA51"}>
                    {a.price - (a.discount * a.price) / 100}₮
                  </Typography>
                  <Typography fontSize={"18px"} sx={{ textDecoration: "line-through" }}>
                    {a.price}₮
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>)}
      </Stack>
      {isMobile ? (<Stack gap={1}>
        {filters.map((b, id) => (
          <Stack key={id} gap={1}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Stack direction={"row"} py={2}>
                <Star />
                <Typography fontSize={"22px"} fontWeight={"700"}>
                  {categories[id]}
                </Typography>
              </Stack>
              <Link href={"menu"} style={{ textDecoration: "none" }}>
                <Typography fontSize={"14px"} color={"#18BA51"}>
                  Бүгдийг харах
                </Typography>
              </Link>
            </Stack>
            <SwipeableCarousel items={b}/>
          </Stack>
        ))}
      </Stack>
      ) : (
      <Stack gap={3}>
        {filters.map((b, id) => (
          <Stack key={id} gap={3}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Stack direction={"row"} py={2}>
                <Star />
                <Typography fontSize={"22px"} fontWeight={"700"}>
                  {categories[id]}
                </Typography>
              </Stack>
              <Link href={"menu"} style={{ textDecoration: "none" }}>
                <Typography fontSize={"14px"} color={"#18BA51"}>
                  Бүгдийг харах
                </Typography>
              </Link>
            </Stack>
            <Cards data={b} />
          </Stack>
        ))}
      </Stack>)}
    </Stack>
  );
};
export default CardsHome;
