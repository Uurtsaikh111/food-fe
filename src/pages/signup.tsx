import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

import { FormControl, IconButton, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Home = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (
    <>
      <main>
        <Stack>
          <Stack width={"448px"} padding={4} gap={6} margin={"auto"} marginTop={"74px"} borderRadius={2} marginBottom={"107px"}>
            <Typography fontSize={"28px"} fontWeight={"700"} margin={"auto"}>Бүртгүүлэх</Typography>
            <Stack gap={2}>
              <Stack gap={"4px"}>
                <Typography>Нэр</Typography>
               <TextField  id="outlined-basic" placeholder="Нэрээ оруулна уу" variant="outlined" sx={{backgroundColor:'#ECEDF0'}}/>
                
              </Stack>
              <Stack gap={"4px"}>
                <Typography>И-мэйл</Typography>
                
                <TextField  id="outlined-basic" placeholder="И-мэйл хаягаа оруулна уу" variant="outlined" sx={{backgroundColor:'#ECEDF0'}} />
                
              </Stack>
              <Stack gap={"4px"}>
                <Typography>Хаяг</Typography>
                
                <TextField  id="outlined-basic" placeholder="Та хаягаа оруулна уу" variant="outlined" sx={{backgroundColor:'#ECEDF0'}}/>
                
              </Stack>
              <Stack gap={"4px"}>
                <Typography>Нууц үг</Typography>
                
                <FormControl sx={{ m: 0, width: '100%', backgroundColor:'#ECEDF0' }} variant="outlined">
          
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
            placeholder="Password"
          />
        </FormControl>
                
              </Stack>
              <Stack gap={"4px"}>
                <Typography>Нууц үг давтах</Typography>
               
                <FormControl sx={{ m: 0, width: '100%', backgroundColor:'#ECEDF0' }} variant="outlined">
          
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
            placeholder="Password"
          />
        </FormControl>
                
              </Stack>
            </Stack>
            <Stack gap={4}>
               <Stack paddingRight={2} flexDirection={"row"} gap={1}>
               <Checkbox {...label} color="default"/>
                 <Typography mt={1}>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
               </Stack>
             
               <TextField  id="outlined-basic"  variant="outlined" sx={{backgroundColor:'#ECEDF0'}}
                 type='submit'
                 value={"Бүртгүүлэх"}
                 name='submit'
               />
            </Stack>
         </Stack>
        </Stack>
      </main>
    </>
  );
};
export default Home;
