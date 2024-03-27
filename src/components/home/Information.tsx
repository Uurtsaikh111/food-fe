import { Home1 } from "@/utils/HomeData";
import { Container, Stack, Typography } from "@mui/material";
import CardsHome from "../CardsHome";

 const Information=()=>{
    return(
        <Stack>

    <Container maxWidth={"lg"}>
          <Stack
            direction={"row"}
            height={"155px"}
            justifyContent={"space-between"}
            marginBottom={"122px"}
          >
            {Home1.map((a, id) => {
              return (
                <Stack
                  width={"265px"}
                  p={2}
                  gap={"15px"}
                  key={id}
                  border={"solid 1px #D6D8DB"}
                  borderRadius={2}
                  boxShadow={"4px 4px 12px rgba(0, 0, 0, 0.10)"}
                >
                  <Stack p={"15px"}>{a.icon}</Stack>
                  <Stack>
                    <Typography>{a.text1}</Typography>
                    <Typography fontSize={"14px"} sx={{ color: "grey" }}>
                      {a.text2}
                    </Typography>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
          <CardsHome/>
        </Container>
        </Stack>
    )
 }
 export default Information;