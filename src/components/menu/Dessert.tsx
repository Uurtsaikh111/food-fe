import { Home2 } from "@/utils/HomeData";
import { CardMedia, Stack, Typography } from "@mui/material"


export const Dessert=()=>{
    const filterDessert = Home2.filter((item) => item.category=="desert");
    return(
    
           <Stack direction={"row"} justifyContent={"space-between"} marginBottom={"86px"} flexWrap={"wrap"}>
            {filterDessert.map((a, id) => {
              return (

                <Stack key={id} gap={"14px"}>
                  <CardMedia component={"img"} src={a.image}
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
     
    )
}