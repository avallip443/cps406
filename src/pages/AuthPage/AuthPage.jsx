import { Box, Container, Flex } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm.jsx";

const AuthPage = () => {
  return (
    <Box
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        hiehgt: "100%",
        backgroundImage: `url(${"./background2.jpg"})`,
        backgroundSize: "cover",
        zIndex: -1,
        backgroundColor: "#d0cad0",
      }}
    >
      <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Container maxW={"container.md"} padding={0}>
          <AuthForm />
        </Container>
      </Flex>
    </Box>
  );
};

export default AuthPage;
