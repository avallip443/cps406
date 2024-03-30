import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  // NOTE: this page has all the elements and function related to signing up

  // NOTE: this sets the inital values of the user's credentials (empty atm)
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  // NOTE: used to show/hide password to use
  const [showPassword, setShowPassword] = useState(false);

  // NOTE: gets login function from useLogin() hook
  const { loading, error, signup } = useSignup();

  return (
    <>
      {/* TODO: style elements*/}
      <Input
        size={"sm"}
        placeholder="Full name"
        type="text"
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
      />
      <Input
        size={"sm"}
        placeholder="Email"
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <InputGroup>
        <Input
          size={"sm"}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            size={"sm"}
            variant={"ghost"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {/* displays errors with signing up using error from signup hook */}
      {error && (
        <Alert status="error" borderRadius={4} fontSize={13} p={2}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      {/* NOTE: onClick sends the inputted information to the useSignup function */}
      <Button
        colorScheme="purple"
        isLoading={loading}
        onClick={() => signup(inputs)}
      >
        Sign up
      </Button>
    </>
  );
};

export default Signup;
