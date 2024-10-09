import { Card } from "@/components/menu";
import { Button, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";

interface dataType {
  _id: string;
  name: string;
}

interface dataFoodType {
  _id: string;
  name: string;
  categoryId: {
    name: string;
    _id: string;
  };
  image: string;
  price: number;
  discount: number;
  ingredients: string[];
}

const Home = () => {
  const [data, setData] = useState<dataType[] | null>(null);
  const [foodData, setFoodData] = useState<dataFoodType[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryRes = await fetch("https://food-be-three.vercel.app/api/category");
        const categoryData = await categoryRes.json();
        setData(categoryData.categories);

        const foodRes = await fetch("https://food-be-three.vercel.app/api/food");
        const foodData = await foodRes.json();
        setFoodData(foodData.foods);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterFoods = selectedCategory && foodData 
    ? foodData.filter(item => item.categoryId._id === selectedCategory)
    : foodData || [];

  const filterCategory = data ? data.filter(item => item.name) : [];

  return (
    <Container>
      <Stack direction={"row"} justifyContent={"space-between"} marginTop={4} marginBottom={7}>
        {filterCategory.map(category => (
          <Button 
            key={category._id}
            sx={{ width: "280px", px: "16px", py: "8px", borderRadius: "8px", color: "black", border: "1px solid grey" }} 
            onClick={() => setSelectedCategory(category._id)}
          >
            {category.name}
          </Button>
        ))}
      </Stack>

      <Stack direction={"row"} gap={3} marginBottom={"86px"} flexWrap={"wrap"}>
        {filterFoods.map(food => (
          <Card key={food._id} data={food} />
        ))}
      </Stack>
    </Container>
  );
};

export default Home;
