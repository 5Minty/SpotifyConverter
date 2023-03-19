// This file is for condensing all of the URLs related to spotify into one spot so we just have to change them in one spot if they're ever used more than once!

export const spotifyRoutes = {
  // redirectLogin: `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SPOTIFY_ID}&scope=user-read-private user-read-email&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}`,
  redirectLogin: "http://localhost:3000/api/auth/signin",
  redirectLogout: "http://localhost:3000/api/auth/signout",
  getSpotifyAccessToken: "https://accounts.spotify.com/api/token",
};

export default spotifyRoutes;
