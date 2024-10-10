import {

  CardMedia,

  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import { Modals } from ".";
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

export const Card = ({ data }: { data: dataFoodType }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack   width={270}>
      <Stack onClick={handleOpen} position={"relative"} >
        <CardMedia
          component={"img"}
          src={data.image}
          width={270}
          height={185}
          alt=""
        />
       {data.discount > 0 ? (
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
        {data.discount}%
        </Typography>
         ) : null}

        <Stack px={1.5}>
          <Typography fontSize={"18px"} fontWeight={"600"}>
            {data.name}
          </Typography>
          <Stack direction={"row"} gap={1}>
            <Typography fontSize={"18px"} fontWeight={"600"} color={"#18BA51"}>
            {data.discount > 0 
                       ? (data.price - (data.discount * data.price) / 100) 
                       : data.price}₮
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        
            <Modals data={data} handleClose={handleClose} open={open}/>
          
      </Stack>
    </Stack>
  );
};
