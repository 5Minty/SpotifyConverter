import { SiteLayout } from "@/components";
import "@/styles/globals.css";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container maxW="1200px" justifyContent="center">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
