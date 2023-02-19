import { useRangeSlider } from "@chakra-ui/react";
import type { NextApiRequest, NextApiResponse } from "next";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import cors from "cors";

// var querystring = require("querystring");
const SPOTIFY_REDIRECT_URI = "http://localhost:3000/spotify-callback/";
const SPOTIFY_SECRET = "5ff7e5b8b9c24237afed36bece1af9fc";
const SPOTIFY_ID = "b1263098ab4b4da7911e4c3c55f6621e";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  //const response = await spotifyLogin(); //call server side login
  cors()(req, res, () => {
    // Your code here
    const requestURL = new URL("https://accounts.spotify.com/authorize?");

    requestURL.searchParams.append("response_type", "code");
    requestURL.searchParams.append("client_id", SPOTIFY_ID);
    requestURL.searchParams.append(
      "scope",
      `user-read-private user-read-email`
    );

    requestURL.searchParams.append("redirect_uri", SPOTIFY_REDIRECT_URI); //WTF
    console.log(SPOTIFY_REDIRECT_URI);

    console.log(`${requestURL}`);

    res.redirect(`${requestURL}`);
  });
}
