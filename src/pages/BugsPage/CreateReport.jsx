import { Container, Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import ReportForm from "../../components/BugReport/ReportForm";

const CreateReport = () => {
  return (
    <>
      <Flex bgColor={"#f8f3ea"}>
        <Navbar />
        <Container maxW={"container.lg"} mt={12}>
          <Flex justifyContent={"center"} gap={20}>
            <ReportForm />
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default CreateReport;
