
import { CardMedia, Stack, Typography } from "@mui/material"
interface dataType {
  id:number,
  category: string,
  title: string,
  image: string,
  price: number,
  discount: number,
  ingredients: string[],
  stock: number,

}

export const Card=({data}:{data:dataType})=>{

    return(
    
          
                  <Stack>
                  <CardMedia component={"img"} src={data.image}
                   width={282}
                   height={186}
                   alt=""/>
                  <Stack px={1.5}>
                    <Typography fontSize={"18px"} fontWeight={"600"}>
                      {data.title}
                    </Typography>
                    <Stack direction={"row"} gap={1}>
                      <Typography
                        fontSize={"18px"}
                        fontWeight={"600"}
                        color={"#18BA51"}
                      >
                        {data.price}₮
                      </Typography>
                     
                    </Stack>
                  </Stack>
                </Stack>
              
     
    )
}