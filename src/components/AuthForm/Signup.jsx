import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signup } = useSignup();

  return (
    <>
      <Input
        size={"sm"}
        placeholder={"Full name"}
        _placeholder={{ color: "gray.300" }}
        borderColor={"gray.300"}
        type={"text"}
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
      />
      <Input
        size={"sm"}
        placeholder={"Email"}
        _placeholder={{ color: "gray.300" }}
        borderColor={"gray.300"}
        type={"email"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <InputGroup>
        <Input
          size={"sm"}
          placeholder={"Password"}
          _placeholder={{ color: "gray.300" }}
          borderColor={"gray.300"}
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
        <Alert status={"error"} borderRadius={4} fontSize={13} p={2}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button
        colorScheme={"pink"}
        isLoading={loading}
        onClick={() => signup(inputs)}
      >
        Sign up
      </Button>
    </>
  );
};

export default Signup;
