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
  Center,
  Container,
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
    <Center h="100vh" w="200vh">
      <Box bg={"pink.200"} w='100%' p={4} color='white'>
        <Heading size="xl" textAlign="center" mb={8} color={"#0B1957"}>Report a Bug</Heading>
        <form onSubmit={handleSubmit}>
        <FormControl isRequired mt={8}>
            <FormLabel color={"#0B1957"}>Your name</FormLabel>
            <Box bg="#fa9ebc" borderRadius={"3px"}>
            <Input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="e.g. John Doe"
              _placeholder={{color: "white"}}
            />
            </Box>
          </FormControl>

          <FormControl isRequired mt={8}>
            <FormLabel color={"#0B1957"}>Bug Name</FormLabel>
            <Box bg="#fa9ebc" borderRadius={"3px"}>
            <Input
              type="text"
              value={bugName}
              onChange={(e) => setBugName(e.target.value)}
              placeholder="What will you call this bug?"
              _placeholder={{color: "white"}}
            />
            </Box>
          </FormControl>

          <FormControl as="fieldset" isRequired mt={8}>
            <FormLabel as="legend" color={"#0B1957"}>Priority Level</FormLabel>
            <RadioGroup
              defaultValue="Low"
              value={priorityLevel}
              onChange={(value) => setPriorityLevel(value)}
              color='#0B1957'
            >
              <HStack spacing="62px" color={"#0B1957"}>
                <Radio value="Low">Low</Radio>
                <Radio value="Medium">Medium</Radio>
                <Radio value="High">High</Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText color={"#0B1957"}>Select the priority level.</FormHelperText>
          </FormControl>

          <FormControl isRequired mt={8}>
            <FormLabel color={"#0B1957"}>Bug Description</FormLabel>
            <Box bg="#fa9ebc" borderRadius={"3px"}>
            <Input
              type="text"
              value={bugDescription}
              onChange={(e) => setBugDescription(e.target.value)}
              placeholder='Please describe the bug in full detail...'
              _placeholder={{color: "white"}}
            />
            </Box>
          </FormControl>

          <FormControl as="fieldset" isRequired mt={8}>
            <FormLabel as="legend" color={"#0B1957"}>Status</FormLabel>
            <RadioGroup
              defaultValue="Active"
              value={bugStatus}
              onChange={(value) => setBugStatus(value)}
              color='#0B1957'
            >
              <HStack spacing="62px" color={"#0B1957"}>
                <Radio value="Active">Active</Radio>
                <Radio value="Closed">Closed</Radio>
                <Radio value="Fixed">Fixed</Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText color={"#0B1957"}>Select status of bug.</FormHelperText>
          </FormControl>

          <Button mt={12} colorScheme="blue" variant="solid" color= "#0B1957">
            Submit
          </Button>
        </form>
      </Box>
      </Center>
    </>
  );
};

export default ReportForm;
