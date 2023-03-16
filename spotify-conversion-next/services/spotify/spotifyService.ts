//Queries is local and service is server
const querystring = require("node:querystring");

export type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: string;
  refresh_token: string;
  scope: string;
};

const client_id = "6b6e2db4d7984ece996ab3cba807a937";
const client_secret = "f34151afa39f4c10b933a89e7be957bf";

const myHeaders = new Headers({
  Authorization: `Basic NmI2ZTJkYjRkNzk4NGVjZTk5NmFiM2NiYTgwN2E5Mzc6ZjM0MTUxYWZhMzlmNGMxMGI5MzNhODllN2JlOTU3YmY=`,
  "Content-Type": "application/x-www-form-urlencoded",
});

export const login = async () => {
  const request = new Request(`https://accounts.spotify.com/authorize?`);
};

export const getSpotifyAuthToken = async (code: string) => {
  const requestUrl = new URL(`https://accounts.spotify.com/api/token`);

  const request = new Request(requestUrl, {
    headers: myHeaders,
    method: "POST",
    body: querystring.stringify({
      redirect_uri: "http://localhost:3000/spotify-callback",
      code: `${code}`,
      grant_type: "authorization_code",
    }),
  });

  const response = await fetch(request);

  const data: SpotifyTokenResponse = await response.json(); //{ = json, like a class or type

  // console.log(data);

  return data;
};
