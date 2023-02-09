import { Student } from "@/pages/api/names/[id]/[name]";
import { Box, BoxProps, Card, Heading, Text } from "@chakra-ui/react";

type StudentFoundProps = {
  student: Student;
  rootProps?: BoxProps;
};

// This is a custom component! I made it in hopes that you would find it and see what's happening here.
// Look at custom component documentation, then come back and look at how this works. Very good for large
// projects where you have lots of reusable parts on multiple pages!
export const StudentFound = (props: StudentFoundProps) => {
  const { student, ...rootProps } = props;

  return (
    <Card
      borderColor="blackAlpha.900"
      borderWidth={2}
      mt={10}
      w="50%"
      {...rootProps}
    >
      <>
        We found the student with the name {student?.name} and ID: {student?.id}{" "}
      </>
      <Heading mt={4}>Part 2:</Heading>
      <Text>
        Ok good... add a SECOND form field for ID. Same functionality, but we
        only will return a successful response when the user inputs the correct
        NAME and ID for a student. If they do not input BOTH correct for any 1
        student, nothing should display.
      </Text>
    </Card>
  );
};

export default StudentFound;
