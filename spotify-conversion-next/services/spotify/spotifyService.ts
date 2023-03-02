//Queries is local and service is server

export type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
};

const myHeaders = new Headers({
  Authorization: `Basic ${process.env.SPOTIFY_AUTH_TOKEN}`,
  "Content-Type": "application/x-www-form-urlencoded",
});

export const login = async () => {
  const request = new Request(`https://accounts.spotify.com/authorize?`);
};

export const getSpotifyAuthToken = async (code: string) => {
  const requestUrl = new URL(`https://accounts.spotify.com/api/token`);

  //TODO: add the other params to the requestUrl

  const request = new Request(requestUrl, {
    headers: myHeaders,
    method: "POST",
    body: new URLSearchParams({
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:3000/spotify-callback/",
      code: code,
    }),
  });

  const response = await fetch(request);

  console.log("req" + (await request.json()));
  //console.log(response); //TODO: 405 and error in chatgpt, look at actual spotify codeflow

  const data: SpotifyTokenResponse = await response.json(); //{ = json, like a class or type

  return data.refresh_token.toString();
};
