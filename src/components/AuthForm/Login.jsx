import { Alert, AlertIcon, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  // NOTE: this page has all the elements and function related to logging in

  // NOTE: this sets the inital values of the user's credentials (empty atm)
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // NOTE: gets login function from useLogin() hook
  const { loading, error, login } = useLogin();

  return (
    <>
      {/* TODO: style elements*/}
      <Input
        size={"sm"}
        placeholder="Email"
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />

      <Input
        size={"sm"}
        placeholder="Password"
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
       
      {/* displays errors with logging in using error from login hook */}
      {error && (
        <Alert status="error" borderRadius={4} fontSize={13} p={2}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      {/* NOTE: onClick sends the inputted information to the useLogin function!! */}
      <Button
        colorScheme="pink"
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Log in
      </Button>

      <Text _hover={{color:"blue.700"}} as="u">Forgot Password?</Text>
    </>
  );
};

export default Login;
