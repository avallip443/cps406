import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from "@chakra-ui/react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { useState } from "react";
import useShowToast from "../../hooks/useShowToast";

const ReportForm = () => {
  const [userName, setUserName] = useState("");
  const [bugName, setBugName] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("Low");
  const [bugDescription, setBugDescription] = useState("");
  const [bugStatus, setBugStatus] = useState("Active");
  const showToast = useShowToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !bugName || !bugDescription) {
      showToast("Error", "Please fill in all fields", "error");
      return;
    }

    try {
      const newReport = {
        userName: userName,
        bugName: bugName,
        priorityLevel: priorityLevel,
        bugDescription: bugDescription,
        bugStatus: bugStatus,
        createdAt: Date.now(),
      };

      // Use addDoc to automatically generate a unique ID for the new document
      await addDoc(collection(firestore, "reports"), newReport);
      showToast("Success", "Bug report submitted successfully", "success");

      // Clear form fields after submission
      setUserName("");
      setBugName("");
      setPriorityLevel("Low");
      setBugDescription("");
      setBugStatus("Active");
    } catch (error) {
      console.error("Error adding document: ", error);
      showToast("Error", "Failed to submit bug report", "error");
    }
  };

  return (
    <Container maxW={"container.lg"} mb={6}>
      <Heading size={"xl"} textAlign={"center"} color={"#0B1957"} mb={4}>
        Report a Bug
      </Heading>
      <Box bgColor={"red"} p={4} bg={"pink.200"} borderRadius={10}>
        <Box bg={"pink.100"} w="100%" p={4} color="white" borderRadius={10}>
          <form onSubmit={handleSubmit} bg={"white"}>
            <FormControl isRequired>
              <FormLabel color={"#0B1957"}>Your name</FormLabel>
              <Input
                type="text"
                value={userName}
                bg={"pink.200"}
                borderRadius={3}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="e.g. John Doe"
                _placeholder={{ color: "white" }}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel color={"#0B1957"}>
                What is the reason for reporting this bug?
              </FormLabel>
              <Input
                type="text"
                value={bugName}
                bg={"pink.200"}
                borderRadius={3}
                onChange={(e) => setBugName(e.target.value)}
                placeholder="What will you call this bug?"
                _placeholder={{ color: "white" }}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel color={"#0B1957"}>
                Can you provide some clarity on the issue?
              </FormLabel>
              <FormHelperText mt={-1} mb={2} color={"gray.600"}>
                Provide a detailed description of the bug, including steps to reproduce it, behaviour, and any other relevant information.
              </FormHelperText>
              <Textarea
                type="text"
                value={bugDescription}
                bg={"pink.200"}
                borderRadius={3}
                onChange={(e) => setBugDescription(e.target.value)}
                placeholder="Please describe the bug in full detail..."
                _placeholder={{ color: "white" }}
              />
            </FormControl>

            <FormControl as="fieldset" isRequired mt={4}>
              <FormLabel as="legend" color={"#0B1957"}>
                Priority Level
              </FormLabel>
              <FormHelperText mt={-1} mb={2} color={"gray.600"}>
                Choose the priority level of the bug. Prioirty indicates the urgency and impact of the bug on the system or users.
              </FormHelperText>
              <RadioGroup
                defaultValue="Low"
                value={priorityLevel}
                onChange={(value) => setPriorityLevel(value)}
                color="#0B1957"
              >
                <HStack spacing="62px" color={"#0B1957"}>
                  <Radio value="Low" borderColor={"#0B1957"}>Low</Radio>
                  <Radio value="Medium" borderColor={"#0B1957"}>Medium</Radio>
                  <Radio value="High" borderColor={"#0B1957"}>High</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>

            <FormControl as="fieldset" isRequired mt={4}>
              <FormLabel as="legend" color={"#0B1957"}>
                Status
              </FormLabel>
              <RadioGroup
                defaultValue="Active"
                value={bugStatus}
                onChange={(value) => setBugStatus(value)}
                color="#0B1957"
              >
                <HStack spacing="62px" color={"#0B1957"} >
                  <Radio value="Active" borderColor={"#0B1957"}>Active</Radio>
                  <Radio value="Closed" borderColor={"#0B1957"}>Closed</Radio>
                  <Radio value="Fixed" borderColor={"#0B1957"}>Fixed</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>

            <FormControl>
              <Checkbox
                mt={4}
                label="Checkbox Label"
                color={"#0B1957"}
                borderColor={"#0B1957"}
              >
                Subscribe to updates
              </Checkbox>
            </FormControl>

            <Button
              mt={4}
              colorScheme={"blue"}
              variant={"solid"}
              color={"#0B1957"}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default ReportForm;
