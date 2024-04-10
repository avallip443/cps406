import { Box, Container, Flex } from "@chakra-ui/react";
import CreateReport from './CreateReport'
import BugReports from "../../components/BugReport/BugReports";

const BugsPage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box>
          <BugReports />
        </Box>
      </Flex>
    </Container>
  );
};

export default BugsPage;