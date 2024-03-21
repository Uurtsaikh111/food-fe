import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";
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
    <Stack
      sx={{
        maxWidth: "1258px",
        height: "57px",
        margin: "auto",
        px: "24px",
        py: "8px",
        background: "red",
        color:"black"
      }}
    >
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box>
              <img src="logo.svg" />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "8px",
               
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  width: "74px",
                  px: "16px",
                  py: "8px",
                  fontSize: "16px",
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                }}
              >
                НҮҮР
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  width: "144px",
                  px: "16px",
                  py: "8px",
                  fontSize: "16px",
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                }}
              >
                ХООЛНЫ ЦЭС
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  width: "174px",
                  px: "16px",
                  py: "8px",
                  fontSize: "16px",
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                }}
              >
                ХҮРГЭЛТИЙН БҮС
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "522px",
              gap: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Search>
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
                width: "102px",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                px: "16px",
                py: "8px",
              }}
            >
              <Box>
                <img src="basket.svg" />
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  width: "38px",
                  fontSize: "16px",
                  fontWeight: "700px",
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                }}
              >
                Сагс
              </Typography>
            </Box>
            <Box
              sx={{
                width: "144px",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                px: "16px",
                py: "8px",
              }}
            >
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src="profile.svg" />
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  width: "80px",
                  fontSize: "16px",
                  fontWeight: "700px",
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                }}
              >
                Нэвтрэх
              </Typography>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Stack>
  );
};
export default Header;
