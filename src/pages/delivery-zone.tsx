import { Star } from "@/components/Images/icons/Star";
import { Delivery } from "@/utils/Delivery";

import { Container, Stack, Typography } from "@mui/material";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

const Home = () => {
  return (
    <Stack>
      <Container maxWidth="lg">
        <Stack marginTop={"61px"} margin={"auto"} marginBottom={"40px"}>
          <Map />
        </Stack>

        <Stack direction={"row"} py={2} marginBottom={"22px"}>
          <Star />
          <Typography fontSize={"22px"} fontWeight={"700"}>
            Хүргэлтийн бүс дэх хаягууд
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={3} marginBottom={"45px"}>
          <Stack p={3} border={"1px solid #D6D8DB"} gap={2}
          borderRadius={2}
          boxShadow={"4px 4px 12px rgba(0, 0, 0, 0.10)"}>
            <Typography py={2} sx={{ borderBottom: 1, borderColor: "#18BA51" }}>
              А бүс
            </Typography>
            <Stack direction={"row"} gap={2}>
              <Stack width={"262px"}>
                {Delivery.map((a, id) => {
                  return <Typography key={id}>{a.text}</Typography>;
                })}
              </Stack>
              <Stack width={"262px"}>
                {Delivery.map((a, id) => {
                  return <Typography key={id}>{a.text}</Typography>;
                })}
              </Stack>

              <Stack></Stack>
            </Stack>
          </Stack>
          <Stack p={3} border={"1px solid #D6D8DB"} gap={2}
          borderRadius={2}
          boxShadow={"4px 4px 12px rgba(0, 0, 0, 0.10)"}>
            <Typography py={2} sx={{ borderBottom: 1, borderColor: "#18BA51" }}>
            Б бүс
            </Typography>
            <Stack direction={"row"} gap={2}>
              <Stack width={"262px"}>
                {Delivery.map((a, id) => {
                  return <Typography key={id}>{a.text}</Typography>;
                })}
              </Stack>
              <Stack width={"262px"}>
                {Delivery.map((a, id) => {
                  return <Typography key={id}>{a.text}</Typography>;
                })}
              </Stack>

              <Stack></Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Home;
