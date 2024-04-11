import { Box, Center, Container, Flex, Heading } from "@chakra-ui/react";
import BugReports from "../../components/BugReport/BugReports";
import Navbar from "../../components/Navbar/Navbar";

const BugsPage = () => {
  return (
    <>
      <Flex gap={20}>
        <Navbar />
        <Container maxW={"container.lg"}>
          <Flex gap={20} alignItems="center" height="70vh">
            <Box>
              <Heading textAlign="center" color="black">Current Bugs</Heading>
              <Flex gap={20} alignItems="center" height="50vh">
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
