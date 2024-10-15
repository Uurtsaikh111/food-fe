import React, { useState, useEffect } from 'react';
import { Home1 } from "@/utils/HomeData";
import { Container, Stack, Typography, Box, IconButton, useMediaQuery, Theme } from "@mui/material";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import CardsHome from "../CardsHome";

const Information = () => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const [index, setIndex] = useState(0);
    const [sliding, setSliding] = useState(false);

    const handleNext = () => {
        setSliding(true);
        setIndex((prevIndex) => (prevIndex + 1) % Home1.length);
    };

    const handlePrev = () => {
        setSliding(true);
        setIndex((prevIndex) => (prevIndex - 1 + Home1.length) % Home1.length);
    };

    useEffect(() => {
        if (sliding) {
            const timer = setTimeout(() => setSliding(false), 300);
            return () => clearTimeout(timer);
        }
    }, [sliding]);

    const CarouselItem = ({ item, id }: { item: typeof Home1[0], id: number }) => (
        <Stack
            width={"275px"}
            p={2}
            gap={"15px"}
            key={id}
            border={"solid 1px #D6D8DB"}
            borderRadius={2}
            boxShadow={"4px 4px 12px rgba(0, 0, 0, 0.10)"}
            sx={{ margin: 'auto' }}
        >
            <Stack p={"15px"}>{item.icon}</Stack>
            <Stack>
                <Typography>{item.text1}</Typography>
                <Typography fontSize={"14px"} sx={{ color: "grey" }}>
                    {item.text2}
                </Typography>
            </Stack>
        </Stack>
    );

    return (
        <Stack>
            <Container maxWidth={"lg"}>
                {isMobile ? (
                    // Mobile Carousel
                    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                transition: 'transform 0.3s ease-in-out',
                                transform: `translateX(-${index * 100}%)`,
                            }}
                        >
                            {Home1.map((item, id) => (
                                <Box key={id} sx={{ minWidth: '100%', flexShrink: 0 }}>
                                    <CarouselItem item={item} id={id} />
                                </Box>
                            ))}
                        </Box>
                        <IconButton
                            onClick={handlePrev}
                            sx={{ position: 'absolute', top: '40%', left: 10 }}
                            disabled={sliding}
                        >
                            <ChevronLeft />
                        </IconButton>
                        <IconButton
                            onClick={handleNext}
                            sx={{ position: 'absolute', top: '40%', right: 10 }}
                            disabled={sliding}
                        >
                            <ChevronRight />
                        </IconButton>
                    </Box>
                ) : (
                    // Desktop Stack
                    <Stack direction={"row"} height={"155px"} justifyContent={"space-between"} marginBottom={{ sm: "80px", lg: "122px" }}>
                        {Home1.map((item, id) => (
                            <CarouselItem key={id} item={item} id={id} />
                        ))}
                    </Stack>
                )}
                <CardsHome />
            </Container>
        </Stack>
    );
};

export default Information;