import "./App.css";
import * as React from "react";
import { Box, ChakraProvider, Heading, Image, Text } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box
        bgColor={"aquamarine"}
        py="12"
        boxShadow="xl"
        display="flex"
        justifyContent={"center"}
      >
        <Heading fontWeight="bold">Alfred Da Buttler</Heading>
        <Text>HAHAHAHAHA</Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <Image src="https://media.tenor.com/aPbt5jbYHGgAAAAC/batman-laugh-lego-batman.gif" />
      </Box>
      <Box display="flex" justifyContent={"space-evenly"}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eFh_cP9SPSc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iEHWBp3KjCI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Box>
    </ChakraProvider>
  );
}

export default App;
