async function login(): Promise<any> {
  const reqOptions = {
    headers: {},
  };

  const response = await fetch(`/api/login`, { mode: "no-cors" }); //CORS issue

  return response;
}

//CANT DO API CALLS TO OTHER APPS UNLESS IN API FOLDER, server side stuff v client side
export const spotifyQueries = {
  login,
  //getSpotifyPlaylist
};

export default spotifyQueries;
