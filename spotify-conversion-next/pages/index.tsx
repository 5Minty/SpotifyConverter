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
import spotifyRoutes from "@/services/spotify/spotifyRoutes";
import { useSession } from "next-auth/react";

type SpotifyFormFields = {
  playlistLink: string;
  playlistName: string;
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

type HomeProps = {};
const Home: NextPage<HomeProps> = () => {
  const { register, handleSubmit } = useForm();
  const { data: session } = useSession();

  const onSubmit = (d: any) => {
    const data = d as SpotifyFormFields; //Type casting
  };

  return (
    //front end
    <Box>
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
  );
};

export default Home;
