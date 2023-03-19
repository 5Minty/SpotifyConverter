import { Song } from "@/components/songList/SongCard";
import SongList from "@/components/songList/SongList";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { encode } from "querystring";
import { useForm } from "react-hook-form";

type PlaylistPageProps = {
  songs: Song[] | null;
};

type SpotifyFormFields = {
  playlistLink: string;
};

export const getServerSideProps: GetServerSideProps<
  PlaylistPageProps
> = async ({ query }) => {
  const queryParams = new URLSearchParams(encode(query));
  const playlistUrl = queryParams.get("playlistUrl") ?? "";

  const songs: Song[] = [];
  return {
    props: { songs },
  };
};

const PlaylistPage: NextPage<PlaylistPageProps> = ({ songs }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (d: any) => {
    const data = d as SpotifyFormFields; //Type casting
  };
  return (
    <Box>
      <SongList songs={songs}></SongList>
      <VStack>
        <Heading py={"5"}>Paste a playlist link here!</Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel>Convert Playlist</FormLabel>
            <Input {...register("playlistLink")}></Input>
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </VStack>
    </Box>
  );
};

export default PlaylistPage;
