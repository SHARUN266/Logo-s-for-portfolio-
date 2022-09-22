import { Box, SimpleGrid,Heading, Image, Text, Tab, Tabs } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { all, Backend, FrontEnd } from "./SkillLogos";

export default function Skills() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(all);
  }, []);
  const handleClick = (e) => {
    var value = e.target.value;
    if (value === "all") {
      setData(all);
    } else if (value === "frontend") {
      setData(FrontEnd);
    } else if (value === "backend") {
      setData(Backend);
    }
  };
  var Category = [
    {
      text: "All stacks",
      value: "all",
    },
    {
      text: "frontend stacks",
      value: "frontend",
    },
    { text: "backend stacks", value: "backend" },
  ];

  return (
    <>
     
      <Box
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
       
       
        <Tabs
          display={"flex"}
          gap={["0rem", "2rem"]}
          alignItems={"center"}
          justifyContent="center"
          variant="enclosed"
          fontWeight={700}
          textTransforms="upperCase"
        >
          {Category.map((elem) => (
            <Tab
              onClick={handleClick}
              value={elem.value}
              _selected={{ color: "white", bg: "#3c85fa" }}
              textTransform="uppercase"
            >
              {elem.text}
            </Tab>
          ))}
        </Tabs>
      </Box>

      <SimpleGrid
        alignItems={"center"}
        justifyContent="center"
        mt="10%"
        id="all"
        gap="3rem"
        columns={[2,3,4]}
       
      >
        {data.map((e) => (
          <Box
           // data-aos="zoom-in"
            // h="120%"
            
            _hover={{
              boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px"
            }}
             w={["100%", "100%", "45%"]}
             m="auto"
             p="2rem"
             textAlign="center"
             fontWeight={700}
            fontFamily={"sans-serif"}
             borderRadius={"15px"}
            
          >
            <Image h="50%" w="100%" src={e.logo} />
            <Text mt="2rem">{e.text}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
