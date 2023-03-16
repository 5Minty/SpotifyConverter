import { StudentFound, StudentNotFound } from "@/components";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { NextPage } from "next";
import * as React from "react";
import { useState } from "react";
// USE THIS FOR FORM SUBMISSION EVERY TIME IN NEXT, IT'S CRACKED
import { useForm } from "react-hook-form";
import { Student, StudentResponse } from "../api/names/[id]/[name]";

export type NamesProps = {};

type NameForm = {
  name: string;
  id: number;
};

const Names: NextPage<NamesProps> = () => {
  const [student, setStudent] = useState<Student>();
  const toast = useToast();

  // Okay, so there's a react hook for everything, including forms
  const { register, handleSubmit } = useForm({
    // here, you define default values for whatever you're submitting
    // in this case, we're just submitting a type with 1 "name" string value
    defaultValues: {
      name: "",
      id: 0,
    },
  });

  // the parameter to this method will have the same properties as our "defaultValues" above
  const onSubmit = async (data: NameForm) => {
    console.log("Data: ", data);
    // Okay, so the submit button has been clicked and we have our form data in "data"
    // Call our API and pass in the name we submitted, and get the response
    /*
      <------YOUR CODE WILL GO HERE, UNCOMMENT THE REST AS YOU GO------->
      */
    const res = await fetch(`/api/names/${data.id}/${data.name}`);
    console.log(res);

    console.log("Response: ", res);
    // Okay... so now to get the response ".json()" object we wanted to send back, do:
    // And of course, we type check here :)
    const studentRes = (await res.json()) as StudentResponse;
    console.log(studentRes);
    if (studentRes) {
      //   // OKAY, FINALLY... set our react state hook for "student" to the student retrieved
      setStudent(studentRes.student);
      toast({
        title: "Nice job.",
        description: "Now do the second part of the task.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection="column"
        alignSelf="center"
        maxW="1200px"
      >
        <Heading>TODO: Add a form to this page with 1 text field</Heading>
        <Text>
          The name you type into the form field will be sent to our API. If that
          name is in our MOCK DATA, display it on the frontend. Otherwise, give
          a custom error message.
        </Text>
        <Box>
          {/* "handleSubmit" is the other part of our "useForm" hook. It basically passes data in the right 
        shape to our "onSubmit" function... hence the "data" parameter of type "NameForm" with only 1 property
      */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl width="50%">
              <FormLabel>Name</FormLabel>

              {/* this "...register" is hooking this <Input> into our "useForm" hook above
              we're telling it that this is the field corresponding to our "name" field in "defaultValues"
              try changing "name" below to anything else... it should yell at you because it only knows of
            a member variable called "name"... pretty cool */}
              <Input
                {...register("name", {
                  required: "Please enter a name you'd like to check.",
                })}
                placeholder="Name you would like to search with API"
              />
              <Input
                {...register("id", {
                  required: "Please enter an ID you'd like to check.",
                })}
                placeholder="ID you would like to search with API"
              />
            </FormControl>
            <Button type="submit" mt={4}>
              Submit
            </Button>

            {/*This syntax means "If student is not null, then display this thing"*/}
            {student && <StudentFound student={student} />}
            {!student && <StudentNotFound />}
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Names;
