import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";
import { Basket, Logo, Profile } from "../Images";
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
    // vertical padding + font size from searchIcon
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
    <Stack alignItems={"center"} >
      <Stack
       width={"1258px"} 
       height={"57px"} 
      
        sx={{
         
          px: "24px",
          py: "8px",
        }}
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
            <Box sx={{ display: "flex", gap: "24px" }}>
              <Box>
                <Logo color={"black"} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "24px",
                  fontSize: "16px",
                  py: "8px",
                  color: "black",
                }}
              >
                <Typography>НҮҮР</Typography>
                <Typography>ХООЛНЫ ЦЭС</Typography>
                <Typography>ХҮРГЭЛТИЙН БҮС</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                gap: "8px",
                display: "flex",
                color: "black",
              }}
            >
              <Search sx={{ border: 1 }}>
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
                  gap: "8px",
                  px: "16px",
                  py: "8px",
                }}
              >
                <Box>
                  <Basket />
                </Box>
                <Typography>Сагс</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  py: "8px",
                }}
              >
                <Box>
                  <Profile />
                </Box>
                <Typography>Нэвтрэх</Typography>
              </Box>
            </Box>
          </Box>
        </AppBar>
      </Stack>
    </Stack>
  );
};
export default Header;
