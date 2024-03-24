
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
   InputLabel,
   OutlinedInput,
   Stack, TextField, Typography,
  } from "@mui/material";
import Link from "next/link";
import React from "react";

  
  export const LoginComponent = () => {
 
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  return (
      <Stack>
        <Stack width={"448px"} borderRadius={2} gap={6} padding={4} margin={"auto"} >
          <Typography fontSize={"28px"} fontWeight={"700"} margin={"auto"}>Нэвтрэх</Typography>
          <Stack gap={1}>
             <Stack gap={2}>
              <Stack gap={0.5}>
                <Typography >Имэйл </Typography>
                <TextField  id="outlined-basic" label="И-мэйл хаягаа оруулна уу" variant="outlined" sx={{backgroundColor:'#ECEDF0'}} />
              </Stack>
              <Stack>
              <Typography
              >Нууц үг</Typography>
                
                <FormControl sx={{ m: 0, width: '100%', backgroundColor:'#ECEDF0' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              
            }
            label="Password"
          />
        </FormControl>
              
              </Stack>
             </Stack>
             <Typography 
          textAlign={"end"} 
          >Нууц үг сэргээх</Typography>
          </Stack>
          <Stack gap={4} >
                <Button sx={{px:"16px", py:"8px", borderRadius:"8px", backgroundColor:"#18BA51", color:"white" , fontSize:"16px", border:"1px solid #18BA51"}}>Нэвтрэх</Button>
              <Typography textAlign={"center"}>Эсвэл</Typography>
              <Link href={"signup"}><Button fullWidth sx={{color:"black", border:"1px solid #18BA51", fontSize:"16px"}}
             
              >Бүртгүүлэх</Button></Link>
          </Stack>
        </Stack>
      </Stack>
    );
  };