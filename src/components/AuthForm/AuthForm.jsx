import { Box, Flex, VStack } from "@chakra-ui/react";
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

      <Box border={"black solid 5px"}>
        <VStack>
          {/* TODO: Add logos, etc here - VStack keeps elements stacked vertically */}

          {/* NOTE: switches between login/signup page based on isLogin value */}
          {isLogin ? <Login /> : <Signup />}
        </VStack>
      </Box>

      {/* NOTE: this section holds the button to switch between login and sign up  */}
      {/* TODO: nothing to add, style elements */}
      <Box>
        <Flex>
          <Box>{isLogin ? "Make an account?" : "Already have an account?"}</Box>

          {/* NOTE: onClick means when the button is clicked, sets isLogin to its opposite value. The text inside the value is also changed if clicked */}
          <Box cursor={"pointer"} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Log in" : "Sign up"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
