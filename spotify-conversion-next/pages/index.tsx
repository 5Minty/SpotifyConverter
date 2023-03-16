import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { NextPage } from "next";
import Link from "next/link";
import login from "./api/login";
import spotifyQueries from "@/services/spotify/spotifyQueries";

type SpotifyFormFields = {
  playlistLink: string;
  playlistName: string;
};

// TODO: Add these to a .env.local file
const SPOTIFY_REDIRECT_URI = "http://localhost:3000/spotify-callback";
const SPOTIFY_SECRET = "f34151afa39f4c10b933a89e7be957bf";
const SPOTIFY_ID = "6b6e2db4d7984ece996ab3cba807a937";

// export async function getServerSideProps() {
//   const res = await fetch(
//     "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl"

//   );
//   const data = await res.json();

//   return {
//     props: { data },
//   };
// }

type HomeProps = {};
const Home: NextPage<HomeProps> = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (d: any) => {
    const data = d as SpotifyFormFields; //Type casting
  };

  const login = () => {
    const requestURL = new URL("https://accounts.spotify.com/authorize?");
    requestURL.searchParams.append("response_type", "code");
    requestURL.searchParams.append("client_id", SPOTIFY_ID);
    requestURL.searchParams.append(
      "scope",
      `user-read-private user-read-email`
    );
    requestURL.searchParams.append("redirect_uri", SPOTIFY_REDIRECT_URI);

    console.log(requestURL);

    return requestURL.toString();
  };

  return (
    //front end
    <Box>
      <Box bgColor={"black"} boxShadow="xl">
        <Text py={"5"} px="5" color={"white"}>
          Spotify Playlist Converter
        </Text>
      </Box>
      <Box px={"500"}>
        <VStack>
          <Text py={"5"}>Paste a playlist link here!</Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Convert Playlist</FormLabel>
              <Input {...register("playlistLink")}></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Playlist Name</FormLabel>
              <Input {...register("playlistName")}></Input>
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
            <Link href={`${login()}`}>
              <Button>Login with Spotify</Button>
            </Link>
          </form>
          <Box></Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
