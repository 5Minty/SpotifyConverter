import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useSession } from "next-auth/react";
import spotifyRoutes from "@/services/spotify/spotifyRoutes";
import { NavLink } from "./NavLink";

export const NavigationBar = (props: {}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { data: session } = useSession();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Grid bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            alignContent="top"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            w="fit-content"
            p={8}
          >
            <Heading
              lineHeight={1.4}
              alignContent="center"
              fontSize="30"
              mr={6}
            >
              Spotify Playlist Converter
            </Heading>
            <Image src="/spotify-logo.png" h={12} />
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <NavLink href="/playlist"> Playlist Display </NavLink>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              {!session && (
                <Link href={`${spotifyRoutes.redirectLogin}`}>
                  <Button>Login</Button>
                </Link>
              )}
              {session && (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={
                        session.user?.image ??
                        "https://avatars.dicebear.com/api/male/username.svg"
                      }
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          session.user?.image ??
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>{session.user!.name}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <Link href={`${spotifyRoutes.redirectLogout}`}>
                      <MenuItem>Logout</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
};

export default NavigationBar;
