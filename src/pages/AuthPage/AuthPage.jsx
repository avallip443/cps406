import { Container, Flex } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm.jsx";

const AuthPage = () => {
  return (
    <>
      <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Container maxW={"container.md"} padding={0}>
          <AuthForm />
        </Container>
      </Flex>
    </>
  );
};

export default AuthPage;
