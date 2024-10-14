import React, { useState } from 'react';
import { Home1 } from "@/utils/HomeData";
import { Container, Stack, Typography, Box, IconButton, useMediaQuery, Theme } from "@mui/material";

import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import CardsHome from "../CardsHome";
import SwipeableViews from 'react-swipeable-views';

const Information = () => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % Home1.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + Home1.length) % Home1.length);
    };

    return (
        <Stack>
            <Container maxWidth={"lg"}>
                {isMobile ? (
                    // Mobile Carousel
                    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                        <SwipeableViews index={index} onChangeIndex={setIndex} >
                            {Home1.map((a, id) => (
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
                                    <Stack p={"15px"}>{a.icon}</Stack>
                                    <Stack>
                                        <Typography>{a.text1}</Typography>
                                        <Typography fontSize={"14px"} sx={{ color: "grey" }}>
                                            {a.text2}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            ))}
                        </SwipeableViews>
                        <IconButton onClick={handlePrev} sx={{ position: 'absolute', top: '40%', left: 10 }}>
                            <ChevronLeft />
                        </IconButton>
                        <IconButton onClick={handleNext} sx={{ position: 'absolute', top: '40%', right: 10 }}>
                            <ChevronRight />
                        </IconButton>
                    </Box>
                ) : (
                    // Desktop Stack
                    <Stack direction={"row"} height={"155px"} justifyContent={"space-between"} marginBottom={{ sm: "80px", lg: "122px" }}>
                        {Home1.map((a, id) => (
                            <Stack
                                width={"265px"}
                                p={2}
                                gap={"15px"}
                                key={id}
                                border={"solid 1px #D6D8DB"}
                                borderRadius={2}
                                boxShadow={"4px 4px 12px rgba(0, 0, 0, 0.10)"}
                            >
                                <Stack p={"15px"}>{a.icon}</Stack>
                                <Stack>
                                    <Typography>{a.text1}</Typography>
                                    <Typography fontSize={"14px"} sx={{ color: "grey" }}>
                                        {a.text2}
                                    </Typography>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                )}
                <CardsHome />
            </Container>
        </Stack>
    );
};

export default Information;
