import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <Flex bgColor={"#f8f3ea"}>
        <Navbar />
        <Container maxW={"container.lg"} mt={12}>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Heading textAlign={"center"} color={"black"} mb={4}>
              About
            </Heading>
            <Container
              maxW={"container.lg"}
              bgColor={"pink.200"}
              p={5}
              borderRadius={10}
            >
              <Container
                maxW={"container.lg"}
                bgColor={"gray.100"}
                py={8}
                px={12}
                border={"1px black solid"}
                borderRadius={5}
              >
                <Text color={"black"}>
                  The Bug Report System (BRS) is a user-friendly program
                  designed for logging bugs and errors into a database. It
                  requires a stable internet connection and specific network
                  capabilities for best performance. The system allows users to
                  open and close bug reports, sending email notifications
                  throughout the repair process. Users must log in to access the
                  form, and the system features a graphical display of the
                  history and frequency of reported bugs. Email notifications
                  are sent upon the resolution of bugs to the reporting
                  developer and other relevant parties.
                </Text>
              </Container>
            </Container>
            <Container maxW={"container.md"} mt={12}>
              <Flex justifyContent={"space-evenly"} w={"full"}>
                <Link
                  to={"/bugs"}
                  as={RouterLink}
                  display={{ base: "none", md: "block" }}
                  cursor="pointer"
                  _hover={{ textDecoration: "none" }}
                >
                  <Text
                    bgColor={"pink.100"}
                    px={20}
                    py={12}
                    borderRadius={10}
                    border={"1px solid black"}
                    color={"black"}
                    fontSize={20}
                  >
                    View Reports
                  </Text>
                </Link>

                <Link
                  to={"/createreport"}
                  as={RouterLink}
                  display={{ base: "none", md: "block" }}
                  cursor="pointer"
                  _hover={{ textDecoration: "none" }}
                >
                  <Text
                    bgColor={"pink.100"}
                    px={20}
                    py={12}
                    borderRadius={10}
                    border={"1px solid black"}
                    color={"black"}
                    fontSize={20}
                  >
                    Make a Report
                  </Text>
                </Link>
              </Flex>
            </Container>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default HomePage;
