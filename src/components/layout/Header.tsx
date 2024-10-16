import * as React from "react";
import { styled, alpha} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Stack } from "@mui/material";
import { Logo, Profile } from "../Images";
import BasketRender from "../BasketRender";
import Link from "next/link";
import BasketIconInfo from "../BasketIconInfo";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "260px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Header = () => {
  return (
    <Container >
      <Stack
        maxWidth={"lg"}
        height={"57px"}
        sx={{ py: { sm: "2px", lg: "8px" } }}
      >
        <AppBar
          position="static"
          sx={{ boxShadow: "none", backgroundColor: "white" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
             
            }}
          >
            <Box sx={{ display: "flex", gap: {xs: '8px', md: '12px', lg:'24px'}}}>
              <Box>
                <Logo color={"black"} />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: {xs: '8px', md: '12px', lg:'24px'},
                  fontSize: {xs: '0.5rem', md: '10px', lg:'16px'},
                  py: "8px",
                  color: "black",
                }}
              >
                <Link  href={"/"}
                  style={{ textDecoration: "none" }}
                ><Typography color={"#000000"}>НҮҮР</Typography></Link>
                <Link  href={"/menu"}
                  style={{ textDecoration: "none" }}
                ><Typography color={"#000000"}>ХООЛНЫ ЦЭС</Typography></Link>
                <Link  href={"/delivery-zone"}
                  style={{ textDecoration: "none" , }}
                ><Typography sx={{ display: { xs: 'none', md: 'none', lg:'flex'} }} color={"#000000"}>ХҮРГЭЛТИЙН БҮС</Typography></Link>
              </Box>
            </Box>
            <Box
              sx={{
                gap: "20px",
                display: "flex",
                color: "black",
              }}
            >
              <Search sx={{ border: 1 ,   display: { xs: 'none', md: 'none', lg:'flex'} }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Хайх"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box
                sx={{
                  display: "flex",
                  gap: "4px",
                }}
              >
                <BasketIconInfo/>
                <Box
                  sx={{marginTop:"10px"

                  }}    
                ><BasketRender/></Box>
              </Box>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex', lg:'flex' },
                  gap: "4px",
                  py: "8px",
                }}
              >
                <Box>
                  <Profile />
                </Box>
                <Link
                  href={"login"}
                  style={{ textDecoration: "none"  }}
                  
                >
                  <Typography color={"#000000"}>Нэвтрэх</Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </AppBar>
      </Stack>
    </Container>
  );
};
export default Header;
