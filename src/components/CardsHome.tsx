import { Stack, Typography } from "@mui/material";
import { Star } from "./Images/icons/Star";
import Link from "next/link";
import { Category, Home2 } from "@/utils/HomeData";
import Image from "next/image";
import Cards from "./Cards";



const CardsHome = () => {
  const filterFoods = Home2.filter((item) => item.discount > 0);


  const filters = Category.map((cat) => {
    return Home2.filter((items) => items.category == cat);
  });

  // const mainFoods = Home2.filter((items) => items.category== "Maindish");
  // const sidedishFoods = Home2.filter((items) => items.category== "Sidedish");
  // const desertFoods = Home2.filter((items) => items.category== "desert");

  // const mainArray = [mainFoods,sidedishFoods,desertFoods]
  console.log(filters);

  return (
    <Stack>
      <Stack gap={10} marginBottom={10}>
        <Stack gap={3}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} py={2}>
              <Star />
              <Typography fontSize={"22px"} fontWeight={"700"}>
                 Хямдралтай
              </Typography>
            </Stack>
            <Link href={"menu"} style={{ textDecoration: "none" }}>
              <Typography
                fontSize={"14px"}
                color={"#18BA51"}
                justifyContent={"center"}
              >
                Бүгдийг харах
              </Typography>
            </Link>
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"}>
            {filterFoods.map((a, id) => {
              return (
                <Stack key={id} gap={"14px"}>
                  <Stack position={"relative"}>
                    <Image src={a.image} width={282} height={186} alt="" />
                    <Typography
                      px={2}
                      py={0.5}
                      border={"1.5px solid white"}
                      borderRadius={4}
                      fontWeight={"600"}
                      bgcolor={"#18BA51"}
                      color={"white"}
                      position={"absolute"}
                      marginTop={2}
                      marginLeft={24}
                    >
                      {a.discount}%
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography fontSize={"18px"} fontWeight={"600"}>
                      {a.title}
                    </Typography>
                    <Stack direction={"row"} gap={1}>
                      <Typography
                        fontSize={"18px"}
                        fontWeight={"600"}
                        color={"#18BA51"}
                      >
                        {a.price - (a.discount * a.price) / 100}₮
                      </Typography>
                      <Typography
                        fontSize={"18px"}
                        sx={{ textDecoration: "line-through" }}
                      >
                        {a.price}₮
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
        <Stack gap={3}>
          {filters.map((b,id)=>{
            return(
             <Stack key={id}>
           <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} py={2}>
              <Star />
              <Typography fontSize={"22px"} fontWeight={"700"}>
                 Хямдралтай
              </Typography>
            </Stack>
            <Link href={"menu"} style={{ textDecoration: "none" }}>
              <Typography
                fontSize={"14px"}
                color={"#18BA51"}
                justifyContent={"center"}
              >
                Бүгдийг харах
              </Typography>
            </Link>
          </Stack>
             <Cards data={b}/>
            </Stack>
            )
          })}
          
          <Stack>
          
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardsHome;
