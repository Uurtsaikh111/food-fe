import React, {useState} from "react";
import { Stack, TextField, Typography } from "@mui/material";

export const StepOne = ({
  setProgress,
  setGetId,
}: {
  setProgress: (_value: number) => void;
  setGetId: (_value: string) => void;
}) => {

  const [email, setEmail] = useState("")
   const [emailError, setEmailError] = useState(false)
  setProgress(0)
  setGetId("")

  const handleSubmit = (event:any) => {
    event.preventDefault()
      setEmailError(false)
    if (email == '') {
        setEmailError(true)
    }

 const data = {
  email:email
 }
   console.log(data)
}

  return (
    <Stack>
     <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>

      <Stack
        width={"448px"}
        padding={4}
        gap={6}
        margin={"auto"}
        marginTop={"86px"}
        borderRadius={2}
        marginBottom={"131px"}
      >
        <Typography fontSize={"28px"} fontWeight={"700"} margin={"auto"}>
          Нууц үг сэргээх
        </Typography>
        <Stack gap={"4px"}>
          <Typography>Имэйл</Typography>
          <TextField
          onChange={e => setEmail(e.target.value)}
     
            id="outlined-basic"
            placeholder="И-мэйл хаягаа оруулна уу"
            variant="outlined"
            sx={{ backgroundColor: "#ECEDF0" }}
          />
        </Stack>
        <TextField
        
          id="outlined-basic"
          variant="outlined"
          sx={{ backgroundColor: "#ECEDF0" }}
          type="submit"
          value={"Үргэлжлүүлэх"}
          name="submit"
        />
      </Stack>
      </form>
      </React.Fragment>
    </Stack>
  );
};
