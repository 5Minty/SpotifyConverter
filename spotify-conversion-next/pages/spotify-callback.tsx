import { getSpotifyAuthToken } from "@/services/spotify/spotifyService";
import { Box } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";

type SpotifyCallbackProps = {
  code: string | string[] | undefined;
  refreshToken: string;
};

// https://dev.to/j471n/how-to-use-spotify-api-with-nextjs-50o5#using-spotify-api

export const getServerSideProps: GetServerSideProps<
  SpotifyCallbackProps
> = async ({ query }) => {
  const code = query.code;

  console.log("code");

  const refreshToken = await getSpotifyAuthToken(code); //rlly the access token

  return {
    props: { code, refreshToken }, //remove refreshTokem
  };
};

const SpotifyCallbackPage: NextPage<SpotifyCallbackProps> = ({
  code,
  refreshToken,
}) => {
  return <Box>{code}</Box>;
};

export default SpotifyCallbackPage;
