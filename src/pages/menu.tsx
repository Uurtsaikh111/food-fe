import { Breakfast, Dessert, MainCourse, Sidedish } from "@/components/menu";
import { Button, Container, Stack } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [show, setShow] = useState(0);

  return (
    <>
      <main>
        <Container maxWidth="lg">
          <Stack gap={"54px"}>
            <Stack
              py={4}
              gap={"28px"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Button
                sx={{
                  width: "280px",
                  alignItems: "center",
                  border: "1px solid #D6D8DB",
                  borderRadius: "8px",
                  px: "16px",
                  py: "8px",
                  color: "black",
                }}
                onClick={() => {
                  setShow(0);
                }}
              >
                Breakfast
              </Button>
              <Button
                sx={{
                  width: "280px",
                  alignItems: "center",
                  border: "1px solid #D6D8DB",
                  borderRadius: "8px",
                  px: "16px",
                  py: "8px",
                  color: "black",
                }}
                onClick={() => {
                  setShow(1);
                }}
              >
                Sidedish
              </Button>
              <Button
                sx={{
                  width: "280px",
                  alignItems: "center",
                  border: "1px solid #D6D8DB",
                  borderRadius: "8px",
                  px: "16px",
                  py: "8px",
                  color: "black",
                }}
                onClick={() => {
                  setShow(2);
                }}
              >
                Main Course
              </Button>
              <Button
                sx={{
                  width: "280px",
                  alignItems: "center",
                  border: "1px solid #D6D8DB",
                  borderRadius: "8px",
                  px: "16px",
                  py: "8px",
                  color: "black",
                }}
                onClick={() => {
                  setShow(3);
                }}
              >
                Dessert
              </Button>
            </Stack>
            <Stack>
              {show == 0 && <Breakfast />}
              {show == 1 && <Sidedish />}
              {show == 2 && <MainCourse />}
              {show == 3 && <Dessert />}
            </Stack>
          </Stack>
        </Container>
      </main>
    </>
  );
};
export default Home;
