import { Stack, Typography } from "@mui/material";
import Image from "next/image";

type dataType = {
  category: string,
  title: string,
  image: string,
  price: number,
  discount: number,
}
const Cards = ({data}:{data:dataType[]}) => {

 return (
    
    <Stack>
     <Stack direction={"row"} justifyContent={"space-between"}>
            {data.map((a, id) => {
              return (

                <Stack key={id} gap={"14px"}>
                  <Image src={a.image}
                   width={282}
                   height={186}
                   alt=""/>
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
                        {a.price}₮
                      </Typography>
                     
                    </Stack>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
    
  );
};

export default Cards;
