import { Link, Stack, Typography} from "@mui/material";
import { Facebook, Instagram, Logo,  Tattoo,  Twitter } from "../Images";
import Divider from '@mui/material/Divider';


export const Footer = () => {
  return (
    <Stack maxWidth={"1440px"} margin={"auto"}>
      {/* <Stack bgcolor={"green"}>
        <Tattoo/>
      </Stack> */}
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
          <Stack direction={"row"} margin={"auto"} gap={1.5}>
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
            <Link href="#" color={"#FFF"}>Нүүр</Link>
            <Link color={"#FFF"}>Холбоо барих</Link>
            <Link color={"#FFF"}>Хоолны цэс</Link>
            <Link color={"#FFF"}>Үйлчилгээний нөхцөл</Link>
            <Link color={"#FFF"}>Хүргэлтийн бүс</Link>
            <Link color={"#FFF"}>Нууцлалын бодлого</Link>
          </Stack>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
             <Facebook/>
             <Instagram/>
             <Twitter/>
          </Stack>
          <Divider component="div" sx={{border:"1px solid white", width:"100%"}}/>

          <Stack>
              <Typography margin={"auto"}>© 2024 Pinecone Foods LLC </Typography>
              <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
          </Stack>
        </Stack>
        

      </Stack>
      
    </Stack>
  );
};
