import { Stack, Typography } from "@mui/material"
import { Star } from "./Images/icons/Star"
import Link from "next/link"
import { Home2 } from "@/utils/HomeData";

const CardsHome=()=>{
    const filterFoods = Home2.filter((item) => item.category == "Хямдралтай");
    const filterFoods2 = Home2.filter((item) => item.category == "Үндсэн хоол");
    const filterFoods3 = Home2.filter((item) => item.category == "Салад ба зууш");
    const filterFoods4 = Home2.filter((item) => item.category == "Амттан");
    return(
        <Stack>
<Stack gap={10} marginBottom={10}>
               <Stack gap={3}>
                 <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                 <Stack direction={"row"} py={2} >
                    <Star />
                    <Typography fontSize={"22px"} fontWeight={"700"}>
                     Хямдралтай
                    </Typography>
                    </Stack>
                    <Link href={"menu"}  style={{ textDecoration: "none" }}>
                    <Typography fontSize={"14px"} color={"#18BA51"} justifyContent={"center"}>
                     Бүгдийг харах
                     </Typography>
                     </Link>
                 </Stack>
                 <Stack direction={"row"}
            
            justifyContent={"space-between"}>
                 {filterFoods.map((a,id)=>{
                    
                    return(
                      <Stack key={id} gap={"14px"}>
                          <Stack width={"270px"} height={"180px"} border={"1px solid grey"}></Stack>
                          <Stack >
                            <Typography fontSize={"18px"} fontWeight={"600"}>{a.title}</Typography>
                            <Stack direction={"row"} gap={1}>
                                <Typography fontSize={"18px"} fontWeight={"600"} color={"#18BA51"}>{a.discount}₮</Typography>
                                <Typography fontSize={"18px"} sx={{textDecoration:"line-through"}} >{a.price}₮</Typography>
                            </Stack>
                          </Stack>
                      </Stack>
                    )
                  })}
                 </Stack>
               </Stack>
               <Stack gap={3}>
                 <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                 <Stack direction={"row"} py={2} >
                    <Star />
                    <Typography fontSize={"22px"} fontWeight={"700"}>
                     Үндсэн хоол
                    </Typography>
                    </Stack>
                    <Link href={"menu"}  style={{ textDecoration: "none" }}>
                    <Typography fontSize={"14px"} color={"#18BA51"} justifyContent={"center"}>
                     Бүгдийг харах
                     </Typography>
                     </Link>
                 </Stack>
                 <Stack direction={"row"}
            
            justifyContent={"space-between"}>
                 {filterFoods2.map((a,id)=>{
                    
                    return(
                      <Stack key={id} gap={"14px"}>
                         <Stack width={"270px"} height={"180px"} border={"1px solid grey"}></Stack>
                          <Stack >
                            <Typography fontSize={"18px"} fontWeight={"600"}>{a.title}</Typography>
                            <Stack direction={"row"} gap={1}>
                                <Typography fontSize={"18px"} fontWeight={"600"} color={"#18BA51"}>{a.price}₮</Typography>
                                
                            </Stack>
                          </Stack>
                      </Stack>
                    )
                  })}
                 </Stack>
               </Stack>
               <Stack gap={3}>
                 <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                 <Stack direction={"row"} py={2} >
                    <Star />
                    <Typography fontSize={"22px"} fontWeight={"700"}>
                     Салад ба зууш
                    </Typography>
                    </Stack>
                    <Link href={"menu"}  style={{ textDecoration: "none" }}>
                    <Typography fontSize={"14px"} color={"#18BA51"} justifyContent={"center"}>
                     Бүгдийг харах
                     </Typography>
                     </Link>
                 </Stack>
                 <Stack direction={"row"}
            
            justifyContent={"space-between"}>
                 {filterFoods3.map((a,id)=>{
                    
                    return(
                      <Stack key={id} gap={"14px"}>
                         <Stack width={"270px"} height={"180px"} border={"1px solid grey"}></Stack>
                          <Stack >
                            <Typography fontSize={"18px"} fontWeight={"600"}>{a.title}</Typography>
                            <Stack direction={"row"} gap={1}>
                                <Typography fontSize={"18px"} fontWeight={"600"} color={"#18BA51"}>{a.price}₮</Typography>
                                
                            </Stack>
                          </Stack>
                      </Stack>
                    )
                  })}
                 </Stack>
               </Stack>
               <Stack gap={3}>
                 <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                 <Stack direction={"row"} py={2} >
                    <Star />
                    <Typography fontSize={"22px"} fontWeight={"700"}>
                     Амттан
                    </Typography>
                    </Stack>
                    <Link href={"menu"}  style={{ textDecoration: "none" }}>
                    <Typography fontSize={"14px"} color={"#18BA51"} justifyContent={"center"}>
                     Бүгдийг харах
                     </Typography>
                     </Link>
                 </Stack>
                 <Stack direction={"row"}
            
            justifyContent={"space-between"}>
                 {filterFoods4.map((a,id)=>{
                    
                    return(
                      <Stack key={id} gap={"14px"}>
                         <Stack width={"270px"} height={"180px"} border={"1px solid grey"}></Stack>
                          <Stack >
                            <Typography fontSize={"18px"} fontWeight={"600"}>{a.title}</Typography>
                            <Stack direction={"row"} gap={1}>
                                <Typography fontSize={"18px"} fontWeight={"600"} color={"#18BA51"}>{a.price}₮</Typography>
                            </Stack>
                          </Stack>
                      </Stack>
                    )
                  })}
                 </Stack>
               </Stack>
          </Stack>
        </Stack>
    )
}

export default CardsHome