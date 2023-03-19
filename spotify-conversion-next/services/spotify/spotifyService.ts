import spotifyRoutes from "./spotifyRoutes";

//Queries is local and service is server
const querystring = require("node:querystring");

export type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: string;
  refresh_token: string;
  scope: string;
};

const myHeaders = new Headers({
  Authorization: `Basic ${Buffer.from(
    process.env.SPOTIFY_ID + ":" + process.env.SPOTIFY_SECRET
  ).toString("base64")}`,
  "Content-Type": "application/x-www-form-urlencoded",
});

export const getSpotifyAuthToken = async (code: string) => {
  const request = new Request(spotifyRoutes.getSpotifyAccessToken, {
    headers: myHeaders,
    method: "POST",
    body: querystring.stringify({
      redirect_uri: `${process.env.SPOTIFY_REDIRECT_URI}`,
      code: `${code}`,
      grant_type: "authorization_code",
    }),
  });

  const response = await fetch(request);

  const data: SpotifyTokenResponse = await response.json(); //{ = json, like a class or type

  // console.log(data);

  return data;
};
