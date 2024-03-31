
import React, {useState} from "react";
import Checkbox from '@mui/material/Checkbox';

import { Button, FormControl, IconButton, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Home = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [name, setName] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [addressError, setAddressError] = useState(false)


  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleSubmit = (event:any) => {
    event.preventDefault()

    setEmailError(false)
    setPasswordError(false)
    setNameError(false)
    setAddressError(false)

    if (email == '') {
        setEmailError(true)
    }
    if (password == '') {
        setPasswordError(true)
    }
    if (address == '') {
      setPasswordError(true)
  }
  if (name == '') {
    setPasswordError(true)
}

    if (email && password && name && address ) {
      
      const data = {
        email:email,
        password:password,
        name:name,
        address:address,
       }
       console.log(data)
    }
    
}

  return (
    <>

        <Stack>

        <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Stack width={"448px"} padding={4} gap={6} margin={"auto"} marginTop={"74px"} borderRadius={2} marginBottom={"107px"}>
            <Typography fontSize={"28px"} fontWeight={"700"} margin={"auto"}>Бүртгүүлэх</Typography>
            <Stack gap={2}>
              <Stack gap={"4px"}>
                <Typography>Нэр</Typography>
               <TextField    onChange={e => setName(e.target.value)}
                  required id="outlined-basic" type="name" placeholder="Нэрээ оруулна уу" variant="outlined" sx={{backgroundColor:'#ECEDF0'}}/>
                
              </Stack>
              <Stack gap={"4px"}>
                <Typography>И-мэйл</Typography>
                
                <TextField    onChange={e => setEmail(e.target.value)}
                  required id="outlined" type="email" placeholder="И-мэйл хаягаа оруулна уу" variant="outlined" sx={{backgroundColor:'#ECEDF0'}} />
                
              </Stack>
              <Stack gap={"4px"}>
                <Typography>Хаяг</Typography>
                
                <TextField    onChange={e => setAddress(e.target.value)}
                  required id="outline" type="address" placeholder="Та хаягаа оруулна уу" variant="outlined" sx={{backgroundColor:'#ECEDF0'}}/>
                
              </Stack>
              <Stack gap={"4px"}>
                <Typography>Нууц үг</Typography>
                
                <FormControl sx={{ m: 0, width: '100%', backgroundColor:'#ECEDF0' }} variant="outlined">
          
          <OutlinedInput
            id="outlined-adornment"
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
             onChange={e => setPassword(e.target.value)}
             required
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
             
               <Button

type="submit"
  sx={{
    px: "16px",
    py: "8px",
    borderRadius: "8px",
    backgroundColor: "#18BA51",
    color: "white",
    fontSize: "16px",
    border: "1px solid #18BA51",
  }}
>
Бүртгүүлэх
</Button>
            </Stack>
         </Stack>
         </form>
         </React.Fragment>
        </Stack>
    
    </>
  );
};
export default Home;
