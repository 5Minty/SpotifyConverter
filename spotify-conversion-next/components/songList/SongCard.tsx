import { Card, Heading } from "@chakra-ui/react";

type SongCardProps = {
  song: Song;
};

export type Song = {
  name: string;
  length: number;
  artist: string;
  album: string;
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
