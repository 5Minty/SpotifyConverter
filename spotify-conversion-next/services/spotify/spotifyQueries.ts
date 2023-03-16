async function login(): Promise<any> {
  const reqOptions = {
    headers: {},
  };

  // console.log(reqOptions);

  const response = await fetch(`/api/login`, { mode: "no-cors" }); //CORS issue
  // const data = await response.json;
  // console.log("Query response:" + data);

  return response;
}

//CANT DO API CALLS TO OTHER APPS UNLESS IN API FOLDER, server side stuff v client side
export const spotifyQueries = {
  spotifyLogin,
  //getSpotifyPlaylist
};

export default spotifyQueries;
