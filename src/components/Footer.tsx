import { Link, Stack} from "@mui/material";
import { Logo } from "./Images";


export const Footer = () => {
  return (
    <Stack maxWidth={"1440px"} margin={"auto"}>
      <Stack
        width={"1440px"}
        height={"545px"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ bgcolor: "#18BA51" }}
      >
        <Stack
          width={"80%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
          sx={{ color: "white"}}
        >
          <Stack direction={"row"} margin={"auto"} >
            <Logo color={"white"} />
            <Stack
              fontSize={"20px"}
              fontWeight={"700"}
              color={"white"}
              margin={"auto"}
            >
              Food Delivery
            </Stack>
          </Stack>
          <Stack width={"100%"} direction={"row"} justifyContent={"space-between"} sx={{color:"white"}}>
            <Link>Нүүр</Link>
            <Link>Холбоо барих</Link>
            <Link>Хоолны цэс</Link>
            <Link>Үйлчилгээний нөхцөл</Link>
            <Link>Хүргэлтийн бүс</Link>
            <Link>Нууцлалын бодлого</Link>
          </Stack>
          <Stack>ss</Stack>
          <Stack>ss</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
