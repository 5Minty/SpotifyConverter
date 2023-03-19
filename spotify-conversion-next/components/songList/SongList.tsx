import { Box } from "@chakra-ui/react";
import SongCard, { Song } from "./SongCard";

type SongListProps = {
  songs: Song[] | null;
};

export const SongList = (props: SongListProps) => {
  const { songs } = props;
  return <Box>{songs && songs?.map((song) => <SongCard song={song} />)}</Box>;
};

export default SongList;
