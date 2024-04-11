import { Box, Center, Container, Flex, Heading } from "@chakra-ui/react";
import BugReports from "../../components/BugReport/BugReports";
import Navbar from "../../components/Navbar/Navbar";

const BugsPage = () => {
  return (
    <>
<<<<<<< HEAD
      <Flex bgColor={'#f8f3ea'}>
=======
      <Flex gap={20}>
>>>>>>> Bugs
        <Navbar />
        <Container maxW={"container.lg"}>
          <Flex gap={20} alignItems="center" height="70vh">
            <Box>
<<<<<<< HEAD
              <Heading color={'black'}>Current Bugs</Heading>
=======
              <Heading textAlign="center" color="black">Current Bugs</Heading>
              <Flex gap={20} alignItems="center" height="50vh">
>>>>>>> Bugs
              <BugReports />
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default BugsPage;
