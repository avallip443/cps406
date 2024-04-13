import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import BugReports from "../../components/BugReport/BugReports";
import Navbar from "../../components/Navbar/Navbar";

const BugsPage = () => {
  return (
    <>
      <Flex bgColor={"#f8f3ea"}>
        <Navbar />
        <Container maxW={"container.lg"} mt={12}>
          <Heading textAlign={"center"} color={"black"} mb={4}>
            Current Bugs
          </Heading>
          <Flex
            gap={20}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box bgColor={"pink.200"} py={4} borderRadius={16} mb={5}>
              <BugReports />
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default BugsPage;
