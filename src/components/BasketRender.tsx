import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { useCustomContext } from "@/context/FoodsCard";
import { Button, CardMedia, Stack, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BasketRender: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { foodList } = useCustomContext();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const totalCost = foodList.reduce((total, item) => total + item.price * item.count, 0);
  const handleOrder = () => {
    console.log(foodList); 
    toast.success('Захиалга амжилттай илгээгдлээ!');
    setTimeout(() => {
      window.location.reload(); 
    }, 5000); 
  };
  const DrawerList = (
    <Box sx={{ width: { sm: 350, md: 450, lg:450, }, px: "20px", py: '20px' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {foodList.length > 0 ? (
          foodList.map((data, index) => (
            <Box key={index} justifyContent={'space-between'} display={'flex'} mb={2} border={'1px grey solid'} borderRadius={2} p={1}>
              <Box sx={{ width: {xs: '60%', md: '100%', lg:'160px'}}}>
                <CardMedia
                  component={"img"}
                  src={data.image}
                  height={110}
                />
              </Box>
              <Stack sx={{ width: { sm:'36%', md: '172px', lg:'172px', }}}>
                <Typography fontWeight={600} display={'flex'} justifyContent={{ sm:'end',md:'start' ,lg:'start'}} >
                  {data.name}
                </Typography>
                <Typography fontWeight={500} display={'flex'} alignItems={'center'} justifyContent={"end"}>
                  {data.count} ширхэг
                </Typography>
                <Typography fontWeight={600} color={'green'} display={'flex'} justifyContent={"end"}>
                  {data.price * data.count} ₮
                </Typography>
              </Stack>
            </Box>
          ))
        ) : (
          <Typography>Захиалга байхгүй байна.</Typography>
        )}
      </List>
      <Typography fontWeight={600} color={'green'} display={'flex'} justifyContent={'end'} mt={1}>
        Нийт: {totalCost} ₮
      </Typography>
      <Button
      onClick={handleOrder}
      disabled={foodList.length === 0}
                sx={{
                  borderRadius: "4px",
                  backgroundColor: "#18BA51",
                  color: "white",
                  px: { sm:'37.5%',md:'100%' , lg:"166px"},
                  py: "8px",
                  ":hover": {
                    backgroundColor: "green"
                  
                  },
                }}
              >
               Захиалах
              </Button>
           
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)}
        style={{ border: 'none', cursor: 'pointer', fontSize: '16px'}}
      >
        Сагс
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
}

export default BasketRender;
