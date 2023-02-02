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

type SpotifyFormFields = {
  playlistLink: string;
  playlistName: string;
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl"
  );
  const data = await res.json();

  return {
    props: { data },
  };
}

type HomeProps = {};
const Home: NextPage<HomeProps> = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (d: any) => {
    const data = d as SpotifyFormFields; //Type casting
    console.log(data.playlistLink);
    console.log(data.playlistName);
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
          </form>
          <Box></Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
