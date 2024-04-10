import { Visibility, VisibilityOff } from "@mui/icons-material"
import { FormControl, IconButton,OutlinedInput, Stack, TextField, Typography } from "@mui/material"
import { useRouter } from "next/router";
import React, { useState } from "react";

export const StepThree=({getId}:{getId:string})=>{
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
  };
  const [password, setPassword] = useState("")
  const router = useRouter();
  const handleSubmit = async (event:any) => {
    event.preventDefault()
   
const data = {
email:getId,
password:password
 }
 const res = await fetch("http://localhost:4000/api/checkCode", {
  body: JSON.stringify(data),
  method: "PUT",
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
});
const datas = await res.json();
    console.log("dataa",datas)
    if (datas.matchedCount) {
      router.push("/login");
    } else {
        alert("wrong email");
      }
    
    
};

      
    return(
        <Stack>
             <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>
           <Stack>
            <Stack width={"448px"} padding={4} gap={6} margin={"auto"} marginTop={"90px"} borderRadius={2} marginBottom={"39px"}>
              <Typography fontSize={"28px"} fontWeight={"700"} margin={"auto"}>Шинэ нууц үг зохиох </Typography>
              <Stack gap={4}>
              <Stack><Typography
              >Нууц үг</Typography>
                
                <FormControl sx={{ m: 0, width: '100%', backgroundColor:'#ECEDF0' }} variant="outlined">
          
          <OutlinedInput
           onChange={e =>  setPassword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? 'password' : 'text'}
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
            placeholder="Password"
          />
        </FormControl></Stack>
        <Stack><Typography
              >Нууц үг давтах </Typography>
                
                <FormControl sx={{ m: 0, width: '100%', backgroundColor:'#ECEDF0' }} variant="outlined">
          
          <OutlinedInput
            id="outlined-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              
            }
            placeholder="Password"
          />
        </FormControl></Stack>
              </Stack>
             <TextField  id="outlined-basic"  variant="outlined" sx={{backgroundColor:'#ECEDF0'}}
                 type='submit'
                 value={"Үргэлжлүүлэх"}
                 name='submit'
               />
            </Stack>
        </Stack> 
        </form>
      </React.Fragment>
        </Stack>
    )
}