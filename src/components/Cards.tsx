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
const datas = data.slice(0,4)
 return (
    
    <Stack>
     <Stack direction={"row"} justifyContent={"space-between"}>
            {datas.map((a, id) => {
              return (

                <Stack key={id} gap={"14px"}>
                  <Image src={a.image}
                   width={282}
                   height={186}
                   alt=""/>
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
        </Stack>
    
  );
};

export default Cards;
