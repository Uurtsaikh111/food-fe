import { Container, Stack } from "@mui/material";
const Home = () => {
  return (
    <>
      <main>
        <Container maxWidth="lg">
           <Stack gap={"54px"}>
             <Stack py={4} gap={"28px"} direction={"row"} justifyContent={"space-between"}>
               <Stack width="280px" alignItems={"center"} border={"1px solid #D6D8DB"} borderRadius={1} px={2} py={1}>Breakfast</Stack>
               <Stack width="280px" alignItems={"center"} border={"1px solid #D6D8DB"} borderRadius={1} px={2} py={1}>Soup</Stack>
               <Stack width="280px" alignItems={"center"} border={"1px solid #D6D8DB"} borderRadius={1} px={2} py={1}>Main Course</Stack>
               <Stack width="280px" alignItems={"center"} border={"1px solid #D6D8DB"} borderRadius={1} px={2} py={1}>Dessert</Stack>
             </Stack>
           </Stack>
        </Container>
      </main>
    </>
  );
};
export default Home;