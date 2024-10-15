/* eslint-disable */
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, CardMedia, IconButton, Stack, Typography } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';

interface CarouselItem {
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

interface SwipeableCarouselProps {
  items: CarouselItem[];
}

const SwipeableCarousel: React.FC<SwipeableCarouselProps> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = () => {
    setSliding(true);
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setSliding(true);
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (sliding) {
      const timer = setTimeout(() => setSliding(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [sliding]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Automatically slide every 5000ms

    return () => clearInterval(interval);
  }, [items.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 75) {
      handlePrev();
    }
  };

  const CarouselItemComponent = ({ item }: { item: CarouselItem }) => (
    <Stack key={item._id} gap={"14px"}>
      <Stack position={"relative"} width={270} margin={"auto"}>
        <CardMedia component={"img"} src={item.image} width={270} height={185} alt="" />
        {item.discount > 0 ? (
          <Typography
            px={2}
            py={0.5}
            border={"1.5px solid white"}
            borderRadius={4}
            fontWeight={"600"}
            bgcolor={"#18BA51"}
            color={"white"}
            position={"absolute"}
            marginLeft={24}
          >
            {item.discount}%
          </Typography>
        ) : null}
      </Stack>
      <Stack px={1.5} margin={"auto"}>
        <Typography fontSize={"18px"} fontWeight={"600"}>
          {item.name}
        </Typography>
        <Stack direction={"row"} gap={1} margin={"auto"}>
          <Typography fontSize={"18px"} fontWeight={"600"} color={"#18BA51"}>
            {item.price - (item.discount * item.price) / 100}₮
          </Typography>
          {item.discount > 0 ? (
            <Typography fontSize={"18px"} sx={{ textDecoration: "line-through" }}>
              {item.price}₮
            </Typography>
          ) : null}
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out', // Transition duration updated
          transform: `translateX(-${index * 100}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item) => (
          <Box key={item._id} sx={{ minWidth: '100%', flexShrink: 0 }}>
            <CarouselItemComponent item={item} />
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handlePrev}
        sx={{ position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)', color: 'white' }}
        disabled={sliding}
        aria-label="Previous item"
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', color: 'white' }}
        disabled={sliding}
        aria-label="Next item"
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default SwipeableCarousel;
