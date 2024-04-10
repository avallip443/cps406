import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
} from "@chakra-ui/react";
import useGetBugReports from "../../hooks/getBugReports";

const BugReports = () => {
  const { isLoading, reports } = useGetBugReports();

  return (
    <Container maxW={"container.md"}>
      {isLoading ? (
        <Spinner size="xl" />
      ) : (
        <Table variant={"striped"} colorScheme={"teal"} size={"md"}>
          <Thead>
            <Tr>
              <Th>Bug Name</Th>
              <Th>Description</Th>
              <Th>Priority Level</Th>
              <Th>Status</Th>
              <Th>Created At</Th>
              <Th>User</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reports?.map((report) => (
              <Tr key={report.id}>
                <Td>{report.bugName}</Td>
                <Td>{report.bugDescription}</Td>
                <Td>{report.priorityLevel}</Td>
                <Td>{report.bugStatus}</Td>
                <Td>{new Date(report.createdAt).toLocaleString()}</Td>
                <Td>{report.userName}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Container>
  );
};

export default BugReports;
