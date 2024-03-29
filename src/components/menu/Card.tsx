import {
  Box,
  Button,
  CardMedia,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { CloseButton } from "../Images";
interface dataType {
  id: number;
  category: string;
  title: string;
  image: string;
  price: number;
  discount: number;
  ingredients: string[];
  stock: number;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 981,
  bgcolor: "background.paper",
  p: 4,
};
export const Card = ({ data }: { data: dataType }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Stack>
      <Stack onClick={handleOpen}>
        <CardMedia
          component={"img"}
          src={data.image}
          width={282}
          height={186}
          alt=""
        />
        <Stack px={1.5}>
          <Typography fontSize={"18px"} fontWeight={"600"}>
            {data.title}
          </Typography>
          <Stack direction={"row"} gap={1}>
            <Typography fontSize={"18px"} fontWeight={"600"} color={"#18BA51"}>
              {data.price}₮
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} display={"flex"} gap={"33px"}>
            <Stack width={"500px"}>
              <CardMedia
                component={"img"}
                src={data.image}
                width={200}
                height={500}
              />
            </Stack>
            <Stack>
              <Stack alignItems={"end"} marginBottom={4}>
                <Stack onClick={handleClose}>
                  <CloseButton />
                </Stack>
              </Stack>
              <Stack gap={4}>
                <Stack>
                  <Typography fontSize={"28px"} fontWeight={700}>
                    {data.title}
                  </Typography>
                  <Typography
                    fontSize={"18px"}
                    fontWeight={"600"}
                    color={"#18BA51"}
                  >
                    {data.price}₮
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
                    {data.ingredients.map((a, id) => {
                      return (
                        <Typography key={id} color={"#767676"}>
                          {a}
                        </Typography>
                      );
                    })}
                  </Stack>
                </Stack>
                <Typography fontSize={"18px"} fontWeight={"600"}>
                  Тоо
                </Typography>
                <Stack direction={"row"} gap={"20px"}>
                  <Button
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "#18BA51",
                      color: "white",
                    }}
                  >
                    -
                  </Button>
                  <Typography
                    sx={{
                      px: "30px",
                      py: "8px",
                      width: "254px",
                      textAlign: "center",
                    }}
                  >
                    1
                  </Typography>
                  <Button
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "#18BA51",
                      color: "white",
                    }}
                  >
                    +
                  </Button>
                </Stack>
                <Button
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "#18BA51",
                    color: "white",
                    px: "16px",
                    py: "8px",
                  }}
                >
                  Сагслах
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Modal>
      </Stack>
    </Stack>
  );
};
