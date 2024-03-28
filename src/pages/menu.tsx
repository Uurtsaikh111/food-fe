import { Card, CardModal} from "@/components/menu";
import {  Button, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";

interface dataType {
  id:number,
  category: string,
  title: string,
  image: string,
  price: number,
  discount: number,
  ingredients: string[],
  stock: number,

}
 const Categories = [
  "Maindish","Sidedish","desert","breakfast"
];
const Home = () => {
const [dataFoods, setDataFoods] = useState<dataType[]>([]);
const [menu, setMenu] = useState("Maindish")

  useEffect(()=>{
  fetch("./dummyFood.json")
  .then((res) => res.json())
  .then((data) => setDataFoods(data))
 
},[]);


const filterFoods = dataFoods.filter((item) => item.category==menu);
return (
    <Container>
      <Stack direction={"row"} justifyContent={"space-between"} marginTop={4} marginBottom={7}>
        {Categories.map((category,id)=>(
          <Button sx={{ width:"280px", px:"16px", py:"8px",borderRadius:"8px", color:"black", border:"1px solid grey"}} onClick={()=>setMenu(category)} key={id}>{category}</Button>
        ))}
      </Stack>
      <CardModal/>

      <Stack direction={"row"} justifyContent={"space-between"} marginBottom={"86px"} flexWrap={"wrap"}>

       {filterFoods.map((data,id) =>(
      <Card key={id} data={data} />
    ))}
      
    </Stack>
    </Container>
  );
};
export default Home;
