import { Box, Button, CardMedia, Modal, Stack, Typography } from "@mui/material";
import { CloseButton } from "../Images";
import { Dispatch, SetStateAction, useState } from "react";
import { FoodDataType } from "@/utils/Datatype/FoodDataType";
import { useCustomContext } from "@/context/FoodsCard";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {sm:'80%', md:'90%',lg:981},
  bgcolor: "background.paper",
  p: {sm:2,lg:4},
};
export const Modals = ({
  data,handleClose,open,
}: {
  data: FoodDataType;
  handleClose: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}) => {
  const [count, setCount] = useState(1);
  const { setFoodList } = useCustomContext();
  const handleIncrease = () => setCount((prev) => prev + 1);
  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };
  const totalPrice = data.discount > 0 
    ? (data.price - (data.discount * data.price) / 100) * count 
    : data.price * count;
  const handleAddToCart = () => {
    setFoodList((prev) => [...prev, { ...data, count }]);
    handleClose(false); 
  };
  return (
    <Stack>
      <Modal
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display={{sm:'column',md:'flex',lg:'flex'}} gap={{sm:'10px',lg:'33px'}}>
          <Stack width={{sm:'100%', md:'90%',lg:'500px'}} sx={{alignContent:'center', display:'flex', justifyContent:'center'}}>
            <CardMedia
              component={"img"}
              src={data.image}
              sx={{ 
                height: { sm: '70%', md: '100%', lg:'85%' },
                width: '100%', 
                objectFit: 'cover', 
              }}
            />
          </Stack>
          <Stack>
          <Stack 
               alignItems="flex-end" marginBottom={4} 
              onClick={() => handleClose(false)} 
              sx={{ display: { sm: 'none',md:'flex' , lg: 'flex' } }} 
          >
           <CloseButton />
          </Stack>
            <Stack gap={{sm:1,md:4, lg:4}}>
              <Stack>
                <Typography fontSize={"28px"} fontWeight={700}>
                  {data.name}
                </Typography>
                <Typography fontSize={"18px"} fontWeight={"600"} color={"#18BA51"}>
                  {data.discount > 0 
                    ? (data.price - (data.discount * data.price) / 100) 
                    : data.price}₮
                </Typography>
              </Stack>
              <Stack gap={1.5}>
                <Typography fontSize={"18px"} fontWeight={"600"}>
                  Орц
                </Typography>
                <Stack
                  direction={"row"}
                  p={1}
                  borderRadius={1}
                  bgcolor={"#F6F6F6"}
                  gap={1}
                >
                  {data.ingredients.map((ingredient, id) => (
                    <Typography key={id} color={"#767676"}>
                      {ingredient}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
              <Typography fontSize={"18px"} fontWeight={"600"}>
                Тоо
              </Typography>
              <Stack direction={"row"} gap={"20px"}>
                <Button
                  onClick={handleDecrease}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#18BA51",
                    color: "white",
                    ":hover": {
                      backgroundColor: "green",
                    },
                  }}
                >
                  -
                </Button>
                <Typography
                  sx={{px: "30px",
                    py: "8px",
                    width: "254px",
                    textAlign: "center",
                  }}
                >
                  {count}
                </Typography>
                <Button
                  onClick={handleIncrease}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#18BA51",
                    color: "white",
                    ":hover": {
                      backgroundColor: "green",
                    },
                  }}
                >
                  +
                </Button>
              </Stack>
              <Stack direction={"row"} gap={1}>
                <Typography fontSize={"18px"} fontWeight={"600"}>
                  Нийт дүн:
                </Typography>
                <Typography fontSize={"18px"} fontWeight={"600"}>
                  {totalPrice}₮
                </Typography>
              </Stack>
              <Button
                onClick={handleAddToCart}
                sx={{
                  borderRadius: "4px",
                  backgroundColor: "#18BA51",
                  color: "white",
                  px: "16px",
                  py: "8px",
                  ":hover": {
                    backgroundColor: "green",
                  },
                }}
              >
                Сагслах
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );};
