import { Container, Flex } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm.jsx";

const AuthPage = () => {
  // NOTE: use this page to layout major elements on the auth page, not to style the elements themselves
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
