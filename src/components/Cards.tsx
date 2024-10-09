import { CardMedia, Stack, Typography } from "@mui/material";
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
const Cards = ({data}:{data:dataFoodType[]}) => {
const datas = data.slice(0,4)
 return (
    
    <Stack>
     <Stack direction={"row"} gap={3}>
            {datas.map((a, id) => {
              return (

                <Stack key={id} gap={"14px"} width={270}>
                  <CardMedia component={"img"} src={a.image} width={270} height={185} alt="" />
                  <Stack px={1.5}>
                    <Typography fontSize={"18px"} fontWeight={"600"}>
                      {a.name}
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
