import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { NextPage } from "next";
import Link from "next/link";
import login from "./api/login";
import spotifyQueries from "@/services/spotify/spotifyQueries";
import spotifyRoutes from "@/services/spotify/spotifyRoutes";
import { useSession } from "next-auth/react";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

type HomeProps = {};
const Home: NextPage<HomeProps> = () => {
  const { register, handleSubmit } = useForm();
  const { data: session } = useSession();

  return (
    //front end
    <Box></Box>
  );
};

export default Home;
