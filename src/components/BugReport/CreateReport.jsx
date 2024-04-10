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
import React from "react";

const CreateReport = () => {
  return (
    <>
      <Box bg={'green'}>
        <Heading>Report a Bug</Heading>
        <form>
          <FormControl isRequired>
            <FormLabel>Bug Name</FormLabel>
            <Input type="text" />
            <FormHelperText>What will you call this bug?</FormHelperText>
          </FormControl>

          <FormControl as="fieldset" isRequired>
            <FormLabel as="legend">Priority Level</FormLabel>
            <RadioGroup defaultValue="Low">
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
            <Input type="text" />
            <FormHelperText>Describe what this bug is.</FormHelperText>
          </FormControl>

          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default CreateReport;
