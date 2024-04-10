import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import BugReports from "../../components/BugReport/BugReports";
import Navbar from "../../components/Navbar/Navbar";

const BugsPage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box>
          <Heading>Current Bugs</Heading>
          <BugReports />
        </Box>
      </Flex>
    </Container>
  );
};

export default BugsPage;