import Skills from "./Components/Skills";
import { Box, Flex, Heading } from "@chakra-ui/react";

function App() {
  return (
    <Box textAlign="center" >
       
          <Heading  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold' mt="5%">ALL LANGUAGE LOGO'S</Heading>
        
      <Flex
        w={"100%"}
        m="auto"
        mt="7%"
        alignItems="center"
        justifyContent={"space-between"}
        direction={["column", "column", "row"]}
      >
        
        <Box w="100%" m="auto">
          <Skills />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
