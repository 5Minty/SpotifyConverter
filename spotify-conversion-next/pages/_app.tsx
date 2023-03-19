import "@/styles/globals.css";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import NavigationBar from "@/components/nav/NavigationBar";

export default function App({
  Component,
  pageProps: { session, pageProps },
}: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <main>
          <Box w="100vw" h="100vh" display="block">
            <NavigationBar />
            <Container maxW="1200px" justifyContent="center">
              <Component {...pageProps} />
            </Container>
          </Box>
        </main>
      </SessionProvider>
    </ChakraProvider>
  );
}
