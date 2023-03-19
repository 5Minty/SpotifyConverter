import { Link } from "@chakra-ui/react";
import SongCard from "./SongCard";

type SongListProps = {
  songs: Song[] | null;
};

export type Song = {
  name: string;
  length: number;
  artist: string;
  album: string;
};

export const SongList = (props: SongListProps) => {
  const { songs } = props;
  return songs?.map((song) => {
    <SongCard song={song}></SongCard>;
  });
};

export default SongList;
