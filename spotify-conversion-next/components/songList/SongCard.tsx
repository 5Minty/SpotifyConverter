import { Card, Heading } from "@chakra-ui/react";
import { Song } from "./SongList";

type SongCardProps = {
  song: Song;
};

export const SongCard = (props: SongCardProps) => {
  const { song } = props;
  return (
    <Card>
      <Heading>{song.name}</Heading>
    </Card>
  );
};

export default SongCard;
