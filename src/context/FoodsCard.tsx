import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
  } from "react";

  interface shopCardType {
    id: number;
    title: string;
    image: string;
    ingeredient: string[];
    category: string;
    price: number;
    count: number;
  }

  const shopFood: shopCardType[] = [];
  interface categoryType {
    categoryId: string;
    categoryName: string;
  }
  const category: categoryType[] = [];
interface CustomePropsContext {
  foodList: shopCardType[];
  setFoodList: Dispatch<SetStateAction<shopCardType[]>>;
  foodData: shopCardType[];
  setFoodData: Dispatch<SetStateAction<shopCardType[]>>;
  categoryData: categoryType[];
  setCategoryData: Dispatch<SetStateAction<categoryType[]>>;
}
interface customContextProvideProps {
  children: React.ReactNode;
}
const CustomContext = createContext<CustomePropsContext>({
  foodList: shopFood,
  setFoodList: () => {},
  foodData: shopFood,
  setFoodData: () => {},
  categoryData: category,
  setCategoryData: () => {},
});

const CustomContextProvider = ({ children }: customContextProvideProps) => {
  const [foodList, setFoodList] = useState(shopFood);
  const [foodData, setFoodData] = useState(shopFood);
  const [categoryData, setCategoryData] = useState(category);
  useEffect(() => {
    setFoodList(foodList);
    setFoodData(foodData);
    setCategoryData(categoryData);
    console.log(categoryData);
  }, [categoryData]);
  return (
    <CustomContext.Provider
      value={{
        foodList,
        setFoodList,
        foodData,
        setFoodData,
        categoryData,
        setCategoryData,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};
export { CustomContext, CustomContextProvider };