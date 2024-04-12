import { Box, Flex, VStack, Center } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Image } from "@chakra-ui/react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

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
      <Image
        src="bug.png"
        boxSize="150px"
        objectFit="scale-down"
        transform="rotate(127deg)"
        position="fixed"
        top="20px"
        left="20px"
        zIndex="999"
      ></Image>

      <Center>
        <Box
          maxW={"350px"}
          height={"400px"}
          w={"100%"}
          borderWidth={"1px"}
          borderRadius={"lg"}
          overflow={"hidden"}
          boxShadow={"md"}
          p={6}
          bg={"rgba(255, 255, 255, 0.1)"}
          backdropFilter={"blur(5px)"}
        >
          <VStack spacing={"6"} h={"100%"} justifyContent={"center"}>
            <Box
              fontSize={"3xl"}
              fontWeight={500}
              textDecoration={"bold"}
              color={"black"}
            >
              {isLogin ? "Login Form" : "Signup Form"}
            </Box>

            {/* switches between login/signup page based on isLogin value */}
            {isLogin ? <Login /> : <Signup />}
          </VStack>
        </Box>
      </Center>

      <Center>
        <Box>
          <Flex mt={3}>
            <Box>
              {isLogin ? "Make an account?" : "Already have an account?"}
            </Box>

            <Box
              ml={"2"}
              cursor={"pointer"}
              onClick={() => setIsLogin(!isLogin)}
              textDecoration={"underline"}
              _hover={{ color: "blue.700" }}
            >
              {isLogin ? "Sign up" : "Log in"}
            </Box>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

export default AuthForm;
