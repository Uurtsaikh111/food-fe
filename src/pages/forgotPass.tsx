
import { StepOne, StepThree, StepTwo } from "@/components/forgot-password";
import { Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
const Home = () => {
  const [progress, setProgress] = useState<number>(0);
  const [getId, setGetId] = useState<string>("");
  return (
  <Stack>
        {progress == 0 && (
        <StepOne setProgress={setProgress} setGetId={setGetId} />
      )}
       {progress == 1 && (
        <StepTwo setProgress={setProgress}/>
      )}
      {progress == 2 && (
        <StepThree setProgress={setProgress} getId={getId} />
      )}
  </Stack>
    );
};
export default Home;