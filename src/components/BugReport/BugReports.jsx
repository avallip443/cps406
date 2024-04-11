import {
  Container,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import EditReport from "./EditReport";
import useAuthStore from "../../store/authStore";
import useGetBugReports from "../../hooks/useGetBugReports";

const BugReports = () => {
  const { isLoading, reports, refreshBugReports } = useGetBugReports();
  const authUser = useAuthStore((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState("");

  const handleEditClick = (report) => {
    setSelectedReport(report);
    setIsOpen(true);
    console.log(selectedReport);
  };

  const updateReports = () => {
    refreshBugReports();
  };

  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Container maxW={"container.lg"}>
        {isLoading ? (
          <Spinner size="xl" />
        ) : (
          <>
            <Table variant={"striped"} colorScheme="white" size={"md"}>
              <Thead text>
                <Tr bgColor={'gray.200'}>
                  <Th color={"black"} textAlign={"center"} border={"1px solid"}>
                    Bug Name
                  </Th>
                  <Th color={"black"} textAlign={"center"} border={"1px solid"}>
                    Description
                  </Th>
                  <Th color={"black"} textAlign={"center"} border={"1px solid"}>
                    Priority Level
                  </Th>
                  <Th color={"black"} textAlign={"center"} border={"1px solid"}>
                    Status
                  </Th>
                  <Th color={"black"} textAlign={"center"} border={"1px solid"}>
                    Created At
                  </Th>
                  <Th color={"black"} textAlign={"center"} border={"1px solid"}>
                    User
                  </Th>
                  <Th color={"black"} textAlign={"center"} border={"1px solid"}>
                    Edit
                  </Th>
                </Tr>
              </Thead>
              <Tbody color={"black"}>
                {reports?.map((report) => (
                  <Tr
                    key={report.id}
                    _odd={{ bg: "pink.100" }}
                    _even={{ bg: "white" }}
                  >
                    <Td textAlign={"center"} border={"1px solid"}>{report.bugName}</Td>
                    <Td>{report.bugDescription}</Td>
                    <Td textAlign={"center"} border={"1px solid"}>{report.priorityLevel}</Td>
                    <Td textAlign={"center"} border={"1px solid"}>{report.bugStatus}</Td>
                    <Td textAlign={"center"} border={"1px solid"}>
                      {new Date(report.createdAt).toLocaleString()}
                    </Td>
                    <Td textAlign={"center"} border={"1px solid"}>{report.userName}</Td>
                    <Td textAlign={"center"} border={"1px solid"}>
                      {authUser && authUser.fullname === report.userName && (
                        <EditIcon
                          cursor="pointer"
                          onClick={() => handleEditClick(report)}
                        />
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <EditReport
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              report={selectedReport}
              updateReports={updateReports}
            />
          </>
        )}
      </Container>
    </Flex>
  );
};

export default BugReports;
