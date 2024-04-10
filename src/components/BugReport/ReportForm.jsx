import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { useState } from "react";
import useShowToast from "../../hooks/useShowToast";

const ReportForm = () => {
  const [userName, setUserName] = useState("")
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
    <>
      <Box bg={"green"}>
        <Heading>Report a Bug</Heading>
        <form onSubmit={handleSubmit}>
        <FormControl isRequired>
            <FormLabel>Your name</FormLabel>
            <Input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <FormHelperText>What is your name?</FormHelperText>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Bug Name</FormLabel>
            <Input
              type="text"
              value={bugName}
              onChange={(e) => setBugName(e.target.value)}
            />
            <FormHelperText>What will you call this bug?</FormHelperText>
          </FormControl>

          <FormControl as="fieldset" isRequired>
            <FormLabel as="legend">Priority Level</FormLabel>
            <RadioGroup
              defaultValue="Low"
              value={priorityLevel}
              onChange={(value) => setPriorityLevel(value)}
            >
              <HStack spacing="24px">
                <Radio value="Low">Low</Radio>
                <Radio value="Medium">Medium</Radio>
                <Radio value="High">High</Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText>Select the priority level.</FormHelperText>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Bug Description</FormLabel>
            <Input
              type="text"
              value={bugDescription}
              onChange={(e) => setBugDescription(e.target.value)}
            />
            <FormHelperText>Describe what this bug is.</FormHelperText>
          </FormControl>

          <FormControl as="fieldset" isRequired>
            <FormLabel as="legend">Status</FormLabel>
            <RadioGroup
              defaultValue="Active"
              value={bugStatus}
              onChange={(value) => setBugStatus(value)}
            >
              <HStack spacing="24px">
                <Radio value="Active">Active</Radio>
                <Radio value="Closed">Closed</Radio>
                <Radio value="Fixed">Fixed</Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText>Select status of bug.</FormHelperText>
          </FormControl>

          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default ReportForm;
