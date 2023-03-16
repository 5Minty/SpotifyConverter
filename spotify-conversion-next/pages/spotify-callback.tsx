import { getSpotifyAuthToken } from "@/services/spotify/spotifyService";
import { Box, Button, Card, useToast } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { encode } from "querystring";
import { useState } from "react";

type SpotifyCallbackProps = {
  code: string | string[] | undefined;
  refreshToken: string;
};

// https://dev.to/j471n/how-to-use-spotify-api-with-nextjs-50o5#using-spotify-api

export const getServerSideProps: GetServerSideProps<
  SpotifyCallbackProps
> = async ({ query }) => {
  const queryParams = new URLSearchParams(encode(query)); // look where "encode" is coming from...
  const code = queryParams.get("code") ?? "";

  const response = await getSpotifyAuthToken(code); // get the whole token response object
  const refreshToken = response.refresh_token;

  // console.log(`Refresh Token: ${refreshToken}`);

  return {
    props: { code, refreshToken }, // pass along refreshToken to the page below
  };
};

const SpotifyCallbackPage: NextPage<SpotifyCallbackProps> = ({
  code, // Here, we're receiving the two things passed into "props" above in getServerSideProps ^^
  refreshToken,
}) => {
  const toast = useToast();
  const router = useRouter();
  const [secondButtonShowing, setSecondButtonShowing] =
    useState<boolean>(false);

  const handleClick = () => {
    toast({
      title:
        "Hold on now. Look at all the FE (frontend) stuff on this page. It's all pretty basic.",
      description:
        "When you're ready, hit the second button and we'll go back to the main page.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    setSecondButtonShowing(true);
  };

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <Box>
      <Card m={4}>{`Code: ${code}`}</Card>
      <Card m={4}>{`RefreshToken: ${refreshToken}`}</Card>
      <Box display="flex" flexDirection="column" width="fit-content">
        <Button onClick={handleClick}> Return to the Home Page </Button>
        {secondButtonShowing && (
          <Button mt={10} onClick={handleGoBack}>
            Return to the Home Page (FINALLY)
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SpotifyCallbackPage;
