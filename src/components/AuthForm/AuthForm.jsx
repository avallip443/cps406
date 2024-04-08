import { Box, Flex, VStack, Center } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";


const AuthForm = () => {
  // TODO: style the authform elements to fit the theme, proper spacing and layout, add logo and title, center items, etc

  // NOTE: use this page to style elements in the auth form

  // NOTE: sets state for login (true = login, false = signup)
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {/* NOTE: the <></> holds the login/signup forms, 'forgot password', logos, etc */}
      <Center>
      <Box maxW="350px" 
           height="400px" 
           w="100%" 
           borderWidth="1px" 
           borderRadius="lg" 
           overflow="hidden" 
           boxShadow="md"
           p="6" 
           bg="rgba(255, 255, 255, 0.1)"
           backdropFilter="blur(5px)">
            
        <VStack spacing="6" h="100%" justifyContent="center" >
          {/* TODO: Add logos, etc here - VStack keeps elements stacked vertically */}
          <Box fontSize="3xl" textDecoration="bold" color="black">
              {isLogin ? "Login Form" : "Signup Form"}</Box>

          {/* NOTE: switches between login/signup page based on isLogin value */}
          {isLogin ? <Login /> : <Signup />}
        </VStack>
      
      </Box>
      </Center>
    

      {/* NOTE: this section holds the button to switch between login and sign up  */}
      {/* TODO: nothing to add, style elements */}
      <Center>
      <Box>
        <Flex>
          <Box>{isLogin ? "Make an account?" : "Already have an account?"}</Box>

          {/* NOTE: onClick means when the button is clicked, sets isLogin to its opposite value. The text inside the value is also changed if clicked */}
          <Box ml="2" cursor={"pointer"} onClick={() => setIsLogin(!isLogin)} textDecoration="underline" _hover={{color:"blue.700"}}>
            {isLogin ? "Sign up" : "Log in" }
          </Box>
        </Flex>
      </Box>
      </Center>

    </>
  );
};

export default AuthForm;
