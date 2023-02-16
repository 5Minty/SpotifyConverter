async function login(): Promise<unknown> {
  const response = await fetch(`/api/login`); //CORS issue

  console.log(response);

  return response;
}

//CANT DO API CALLS TO OTHER APPS UNLESS IN API FOLDER, server side stuff v client side
export const spotifyQueries = {
  login,
  //getSpotifyPlaylist
};

export default spotifyQueries;
