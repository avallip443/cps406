import { Alert, AlertIcon, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, error, login } = useLogin();

  return (
    <>
      <Input
        size={"sm"}
        placeholder="Email"
        _placeholder={{ color: "gray.300" }}
        borderColor={"gray.300"}
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />

      <Input
        size={"sm"}
        placeholder="Password"
        _placeholder={{ color: "gray.300" }}
        borderColor={"gray.300"}
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

      <Button
        colorScheme="pink"
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Log in
      </Button>

      <Text _hover={{ color: "blue.700" }} as="u">
        Forgot Password?
      </Text>
    </>
  );
};

export default Login;
