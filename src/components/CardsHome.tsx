import { CardMedia, Stack, Typography } from "@mui/material";
import { Star } from "./Images/icons/Star";
import Link from "next/link";
import { Category, Home2 } from "@/utils/HomeData";
import Cards from "./Cards";
const CardsHome = () => {
const filterFoods = Home2.filter((item) => item.discount > 0);
const saleFoods = filterFoods.slice(0,4)

const filters = Category.map((cat) => {
    return Home2.filter((items) => items.category == cat);
  });

const Headers= ["Үндсэн хоол", "Салад ба зууш", "Амттан" ]

return (
 
      <Stack gap={"60px"} marginBottom={10}>
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
            {saleFoods.map((a, id) => {
              return (
                <Stack key={id} gap={"14px"}>
                  <Stack position={"relative"}>
                    <CardMedia component={"img"} src={a.image} width={282} height={186} alt="" />
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
                  <Stack px={1.5}>
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
             <Stack key={id} gap={3}>
           <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} py={2}>
              <Star />
              <Typography fontSize={"22px"} fontWeight={"700"}>
                {Headers}
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
   
  );
};

export default CardsHome;
