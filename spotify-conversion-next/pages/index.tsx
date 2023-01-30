import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import * as React from 'react'
import { Box, Button, ChakraProvider, Input, Text, VStack } from '@chakra-ui/react'
import {useRef} from 'react';
import {useState} from 'react';

const songs = [{
  id: 1, name: "goosebumps", isOnAppleMusic: true},
  {id: 2, name: "funky jesus", isOnAppleMusic: false}
]

export default function Home(){ //export default function normally
  //const [message, setMessage] = useState('');
  let playlistLinkRef = useRef(null);

  const [numSongs, setNumSongs] = React.useState(0);

  function convertClick(){
    setNumSongs(numSongs + 1);
    alert('Your link is ' + playlistLinkRef.current);
  }
  

  // const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
  //   setMessage(event.target.value);

  //   console.log('value is:', event.target.value)
  // }

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
    <ChakraProvider>
      <Box bgColor={"black"} boxShadow="xl">
        <Text py={"5"} px="5" color={"white"}>
          Spotify Playlist Converter
        </Text>
      </Box>
      <Box px={"500"}>
        
        <VStack>

        <Text py={"5"}>
          Paste a playlist link here!
        </Text>
        <Input ref={playlistLinkRef}>
        </Input>

        <Button onClick={convertClick}>
          Convert Playlist
        </Button>
        <Text>
          Button clicked {numSongs} times
          {/* Message: {message} */}
        </Text>
        <Text>
          {listSongs}
          
        </Text>
        <Box>
          
        </Box>
        </VStack>
        
      </Box>
    </ChakraProvider>
  )
}
