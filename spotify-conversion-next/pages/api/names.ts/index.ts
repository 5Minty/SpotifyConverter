import { useRangeSlider } from "@chakra-ui/react";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req; //figure out which http verb/action we want

  switch (
    method //function that supports multiple verbs
  ) {
    case "GET":
      res.json({ method: "GET", endpoint: "Users" });
      break;
    case "POST":
      res.json({ method: "POST", endpoint: "Users" });
      break;
    default: //When the verb isn't GET or POST (get or save)
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
