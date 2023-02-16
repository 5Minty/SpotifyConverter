async function spotifyLogin(): Promise<unknown> {
  const response = `http://localhost:3000/api/login/`;
  console.log(response);

  await fetch(response);

  return response;
}

//CANT DO API CALLS TO OTHER APPS UNLESS IN API FOLDER, server side stuff v client side
export const spotifyQueries = {
  spotifyLogin,
  //getSpotifyPlaylist
};

export default spotifyQueries;
