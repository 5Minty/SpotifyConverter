export const spotifyRoutes = {
  redirectLogin: `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SPOTIFY_ID}&scope=user-read-private user-read-email&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}`,
  getSpotifyAccessToken: "https://accounts.spotify.com/api/token",
};

export default spotifyRoutes;
