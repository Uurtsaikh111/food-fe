import { Container, Divider, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const Reclam = () => {
    const theme = useTheme();
 return (
    <Stack
    bgcolor={theme.palette.primary.main}
    sx={{ backgroundImage: "url(/bgImage.svg)" }}
    marginBottom={"122px"}
  >
    <Container maxWidth={"lg"}>
      <Stack
        height={"788px"}
        direction={"row"}
        alignItems={"center"}
        position={"relative"}
        gap={"180px"}
      >
        <Stack
          width={"370px"}
          gap={"23px"}
          color={theme.palette.primary.light}
        >
          <Typography fontSize={"55px"} fontWeight={"600"} lineHeight={1}>
            Pinecone Food delivery
          </Typography>
          <Divider
            component="div"
            sx={{ border: "1px solid white", width: "100%" }}
          />
          <Typography fontSize={"22px"} fontWeight={"500"}>
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
        <Image src="/homefood1.png" width={443} height={438} alt="" />

        <Stack
          marginLeft={"840px"}
          marginTop={"120px"}
          position={"absolute"}
        >
          <Image src="/homefood2.png" width={313} height={313} alt="" />
        </Stack>
      </Stack>
    </Container>
  </Stack>
    
    
  );
};

export default Reclam;