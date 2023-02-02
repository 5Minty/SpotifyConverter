// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useRangeSlider } from "@chakra-ui/react";
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
//   id: string;
// };

const names = [
  {
    id: 1,
    name: "Joe",
  },
  { id: 2, name: "Sam" },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  //Arrow instead of function handler?
  const {
    query: { id }, //query=req for info
  } = req;

  res.json({
    //Why json?
    ...names.find((name) => name.id === parseInt(id as string)),
  });
};
