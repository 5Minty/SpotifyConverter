import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import * as React from "react";
import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useState } from "react";
import { stringify } from "querystring";
import { useForm } from "react-hook-form";

const songs = [
  {
    id: 1,
    name: "goosebumps",
    isOnAppleMusic: true,
  },
  { id: 2, name: "funky jesus", isOnAppleMusic: false },
];

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

export default function Home({ data }) {
  //export default function normally
  console.log("data", data);
  const { register, handleSubmit } = useForm();

  const onSubmit = (d: any) => {
    const data = d as SpotifyFormFields; //Type casting
    console.log(data.playlistLink);
    console.log(data.playlistName);
  };

  const listSongs = songs.map(
    (
      song //This is the actual component that displays the list. Map iterates through each 'song' or 'i' variable and does smth to it
    ) => (
      <li
        key={song.id} //song.id is in brackets because it is found outside of the fuction
        style={{
          color: song.isOnAppleMusic ? "red" : "green", //shorter way to do an if-else statement
        }}
      >
        {song.name}
      </li> //song.name also in brackets because it's found outside of the function
    )
  );
  return (
    //front end
    <ChakraProvider>
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

          <Text>{listSongs}</Text>
          <Box></Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
