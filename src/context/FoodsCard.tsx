import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ShopCardType {
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
  count: number;
}

const initialShopFood: ShopCardType[] = []; 
const initialCategories: CategoryType[] = []; 

interface CategoryType {
  categoryId: string;
  categoryName: string;
}

interface CustomPropsContext {
  foodList: ShopCardType[];
  setFoodList: Dispatch<SetStateAction<ShopCardType[]>>;
  foodData: ShopCardType[];
  setFoodData: Dispatch<SetStateAction<ShopCardType[]>>;
  categoryData: CategoryType[];
  setCategoryData: Dispatch<SetStateAction<CategoryType[]>>;
}

interface CustomContextProviderProps {
  children: React.ReactNode;
}

const CustomContext = createContext<CustomPropsContext>({
  foodList: initialShopFood,
  setFoodList: () => {},
  foodData: initialShopFood,
  setFoodData: () => {},
  categoryData: initialCategories,
  setCategoryData: () => {},
});

const CustomContextProvider = ({ children }: CustomContextProviderProps) => {
  const [foodList, setFoodList] = useState<ShopCardType[]>(initialShopFood);
  const [foodData, setFoodData] = useState<ShopCardType[]>(initialShopFood);
  const [categoryData, setCategoryData] = useState<CategoryType[]>(initialCategories);

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

// Optional: Create a custom hook for easier context consumption
const useCustomContext = () => useContext(CustomContext);

export { CustomContext, CustomContextProvider, useCustomContext };
