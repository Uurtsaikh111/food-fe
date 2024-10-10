import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCustomContext } from "@/context/FoodsCard";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -1,

    border: `2px solid ${theme.palette.background.paper}`,
    padding:  '04px',
  },
}));

const BasketIconInfo=()=> {
  const { foodList } = useCustomContext();
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={foodList.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}



export default BasketIconInfo;