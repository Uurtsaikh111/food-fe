import { Home2 } from "@/utils/HomeData";
import { CardMedia, Stack, Typography } from "@mui/material";
import BasicModal from "./Modal";

export const Breakfast = () => {
  // fetch("public/dummyFood.json")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  const filterFoods = Home2.filter((item) => item.category == "breakfast");
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      marginBottom={"86px"}
      flexWrap={"wrap"}
    >
      {filterFoods.map((a, id) => {
        return (
          <Stack key={id} gap={"14px"} >
            <BasicModal/>
            <CardMedia
              component="img"
              image={a.image}
              width={282}
              height={186}
              alt=""
            />
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
                  {a.price}₮
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
