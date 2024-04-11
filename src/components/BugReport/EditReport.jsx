import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useEditReport from "../../hooks/useEditReport";
import useShowToast from "../../hooks/useShowToast";

const EditReport = ({ isOpen, onClose, report }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const showToast = useShowToast();
  const { editReport } = useEditReport();

  const [inputs, setInputs] = useState({
    bugDescription: "",
    priorityLevel: "",
    bugStatus: "",
  });

  // Update inputs when report changes
  useEffect(() => {
    if (report) {
      setInputs({
        bugDescription: report.bugDescription,
        priorityLevel: report.priorityLevel,
        bugStatus: report.bugStatus,
      });
    }
  }, [report]);

  const handleEditReport = async () => {
    setIsUpdating(true);

    try {
      await editReport(report.id, inputs);
      onClose();
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bg={"black"}
        boxShadow={"xl"}
        border={"1px solid gray"}
        mx={3}
      >
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody>
          <Flex bg={"black"}>
            <Stack spacing={4} w={"full"} maxW={"md"} bg={"black"} p={6} my={0}>
              <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                Edit Bug
              </Heading>

              <FormControl>
                <FormLabel fontSize={"sm"}>Description</FormLabel>
                <Input
                  placeholder={"Description"}
                  size={"sm"}
                  type={"text"}
                  value={inputs.bugDescription}
                  onChange={(e) =>
                    setInputs({ ...inputs, bugDescription: e.target.value })
                  }
                />
              </FormControl>

              <FormControl as="fieldset" isRequired>
                <FormLabel as="legend" fontSize={"sm"}>
                  Priority Level
                </FormLabel>
                <RadioGroup
                  value={inputs.priorityLevel}
                  onChange={(value) =>
                    setInputs({ ...inputs, priorityLevel: value })
                  }
                >
                  <HStack spacing="24px">
                    <Radio value="Low">Low</Radio>
                    <Radio value="Medium">Medium</Radio>
                    <Radio value="High">High</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>

              <FormControl as="fieldset" isRequired>
                <FormLabel as="legend">Status</FormLabel>
                <RadioGroup
                  value={inputs.bugStatus}
                  onChange={(value) =>
                    setInputs({ ...inputs, bugStatus: value })
                  }
                >
                  <HStack spacing="24px">
                    <Radio value="Active">Active</Radio>
                    <Radio value="Closed">Closed</Radio>
                    <Radio value="Fixed">Fixed</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>

              <Stack spacing={6} direction={["column", "row"]}>
                <Button
                  bg={"red.400"}
                  color={"white"}
                  w="full"
                  size="sm"
                  _hover={{ bg: "red.500" }}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  size="sm"
                  w="full"
                  _hover={{ bg: "blue.500" }}
                  isLoading={isUpdating}
                  onClick={handleEditReport}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditReport;
