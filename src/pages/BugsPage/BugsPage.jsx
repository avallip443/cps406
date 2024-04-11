import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import BugReports from "../../components/BugReport/BugReports";
import Navbar from "../../components/Navbar/Navbar";

const BugsPage = () => {
  return (
    <>
      <Flex bgColor={'#f8f3ea'}>
        <Navbar />
        <Container maxW={"container.lg"}>
          <Flex gap={20}>
            <Box>
              <Heading color={'black'}>Current Bugs</Heading>
              <BugReports />
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default BugsPage;
