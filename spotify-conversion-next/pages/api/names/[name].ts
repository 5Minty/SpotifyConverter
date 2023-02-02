// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useRangeSlider } from "@chakra-ui/react";
import type { NextApiRequest, NextApiResponse } from "next";

export type Student = {
  id: number;
  name: string;
};

export type StudentResponse = {
  student?: Student;
  message: string;
};

// mock data (DO NOT MOVE WHERE THIS DATA LIVES, IT IS IN THIS FILE AND ONLY THIS FILE)
const STUDENTS = [
  {
    id: 1,
    name: "Joe",
  },
  {
    id: 2,
    name: "Sam",
  },
];

// When we get a request to this API route ("/api/names/[any-name]"), this handler function is called
// You can name this function whatever you want, as long as it has the 2 params listed!
// You can define a type with the <> on what you're sending back in the .json of
// the response for super-secure type checking (encouraged!)
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StudentResponse>
) {
  // get the name that we passed in
  const { name } = req.query;

  console.log(name);

  switch (req.method) {
    case "GET":
      const foundStudent = STUDENTS.find((p) => p.name == name);
      if (foundStudent) {
        res.status(200).json({
          student: foundStudent,
          message: "Student retrieved successfully.",
        });
      } else {
        res.status(400).json({
          message: `Unable to find student with name "${name}"`,
        });
      }
  }
}
