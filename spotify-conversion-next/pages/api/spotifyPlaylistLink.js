// import {
//   Box,
//   Button,
//   ChakraComponent,
//   ChakraProvider,
//   FormControl,
//   FormLabel,
//   Input,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import * as React from "react";

// // type Data = {
// //   name: string;
// // };

// export const getStaticProps = asnyc();
// {
//   //Next function that gets data from somewhere before its rendered so we can return it in a diff way
//   const res = await fetch(
//     "https://open.spotify.com/track/5WedFiLoUyE1e9d5JpxMFl"
//   );
//   const song = await res.json();

// }

// const Songs = ({ song }) => {
//   return (
//     <ChakraProvider>
//       <Box>
//         <Text>
//           Song link:
//           <div key={song.id}>
//             {/* gets id of playlist from props list */}
//             <h3>{song.name}</h3>
//           </div>
//         </Text>
//       </Box>
//     </ChakraProvider>
//   );
// };

// // export async function handler(
// //   req: NextApiRequest,
// //   res: NextApiResponse<Data>
// // ) {
// //   res = await fetch('https://open.spotify.com/playlist/6jbZwP99bsGwL9e90UpXA5')
// //   res.status(200).json({ name: "Spotify" }); //Why status 200?
// // }
