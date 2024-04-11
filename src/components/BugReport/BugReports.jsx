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
import { EditIcon } from '@chakra-ui/icons'
import useAuthStore from "../../store/authStore";
import useGetBugReports from "../../hooks/useGetBugReports";

const BugReports = () => {
  const { isLoading, reports } = useGetBugReports();
  const authUser = useAuthStore((state) => state.user);
  console.log(authUser);

  return (
    <Container maxW={"container.md"}>
      {isLoading ? (
        <Spinner size="xl" />
      ) : (
        <Table variant={"striped"} colorScheme="white" size={"md"}>
          <Thead>
            <Tr >
              <Th color="black">Bug Name</Th>
              <Th color="black">Description</Th>
              <Th color="black">Priority Level</Th>
              <Th color="black">Status</Th>
              <Th color="black">Created At</Th>
              <Th color="black">User</Th>
            </Tr>
          </Thead>
          <Tbody color={"black"}>
            {reports?.map((report) => (
              <Tr key={report.id} _odd={{ bg: "pink.200" }} _even={{ bg: "pink.100" }}>
                <Td>{report.bugName}</Td>
                <Td>{report.bugDescription}</Td>
                <Td>{report.priorityLevel}</Td>
                <Td>{report.bugStatus}</Td>
                <Td>{new Date(report.createdAt).toLocaleString()}</Td>
                <Td>{report.userName}</Td>
                <Td>
                  {authUser && authUser.fullname === report.userName && (
                    <EditIcon />
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Container>
  );
};

export default BugReports;
