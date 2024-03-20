import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";


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
    <Box sx={{ flexGrow: 1 , width:'100%', maxWidth:'1258px', height:'57px', margin:'auto', px:'24px', py:'8px',}}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{width:'100%',display: 'flex', justifyContent:"space-between", alignItems: 'center', backgroundColor:'white'}}>
          <Box sx={{width:'553px',height:'41px', display: 'flex', justifyContent:"space-between", alignItems: 'center'}}>
            <Box><img src="logo.svg"/></Box>
          <Box sx={{width:'418px',display: 'flex', gap:'8px',color:'black' }}>
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ width:'74px',px:'16px', py:'8px',fontSize:'16px' ,flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            НҮҮР
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{  width:'144px',px:'16px', py:'8px',fontSize:'16px',flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            ХООЛНЫ ЦЭС
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{width:'174px',px:'16px', py:'8px', fontSize:'16px', flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
           ХҮРГЭЛТИЙН БҮС
          </Typography>
           </Box>
          </Box>
          <Box sx={{width:'522px',gap:'8px',display: 'flex', alignItems: 'center', color:'black'}}>
            <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Хайх"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{width:'102px',display: 'flex',gap:'8px' ,alignItems: 'center',px:'16px', py:'8px'}}>
             <Box><img src="basket.svg"/></Box>
             <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ width:'38px',fontSize:'16px' ,fontWeight:'700px',flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Сагс
          </Typography>
          </Box>
          <Box sx={{width:'144px',display: 'flex',gap:'8px' ,alignItems: 'center',px:'16px', py:'8px'}}>
             <Box sx={{width:'32px', height:'32px'}}><img src="profile.svg"/></Box>
             <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ width:'80px',fontSize:'16px' ,fontWeight:'700px',flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Нэвтрэх
          </Typography>
          </Box>
          </Box></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
