import React, { Dispatch, SetStateAction, useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
export const StepOne = ({
  setProgress,
  setGetId,
}: {
  setProgress: (_value: number) => void;
  setGetId: Dispatch<SetStateAction<string>>;
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      email: email,
    };
    const res = await fetch("http://localhost:4000/api/forgotPass", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const sentMail = await res.json();
    console.log("dataa", sentMail);
    if (sentMail) {
      setGetId(data.email);
      setProgress(1);
      console.log(data.email);
    } else {
      alert("wrong email");
    }
  };

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
                onChange={(e) => setEmail(e.target.value)}
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
