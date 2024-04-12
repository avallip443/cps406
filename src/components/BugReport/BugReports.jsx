import {
  Button,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
} from "@chakra-ui/react";
import { BellIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import EditReport from "./EditReport";
import useAuthStore from "../../store/authStore";
import useGetBugReports from "../../hooks/useGetBugReports";
import useShowToast from "../../hooks/useShowToast";

const BugReports = () => {
  const { isLoading, reports, refreshBugReports } = useGetBugReports();
  const authUser = useAuthStore((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState("");
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [description, setDescription] = useState("");

  const showToast = useShowToast();

  const handleEditClick = (report) => {
    setSelectedReport(report);
    setIsOpen(true);
    console.log(selectedReport);
  };

  const handleNotificationClick = () => {
    setShowSubscribeModal(true);
  };

  const updateReports = () => {
    refreshBugReports();
  };

  const handleSubscribe = () => {
    showToast("Success", "Subscribed to bug", "success");
    setShowSubscribeModal(false);
  };

  const handleDescriptionClick = (description) => {
    setDescription(description);
    setShowDescriptionModal(true);
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
                <Tr bgColor={"gray.200"}>
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
                    <Td textAlign={"center"} border={"1px solid"}>
                      {report.bugName}
                    </Td>
                    <Td>
                      <Button
                        variant="link"
                        onClick={() =>
                          handleDescriptionClick(report.bugDescription)
                        }
                        color={'blue.700'}
                      >
                        Click to view report
                      </Button>
                    </Td>
                    <Td textAlign={"center"} border={"1px solid"}>
                      {report.priorityLevel}
                    </Td>
                    <Td textAlign={"center"} border={"1px solid"}>
                      {report.bugStatus}
                    </Td>
                    <Td textAlign={"center"} border={"1px solid"}>
                      {new Date(report.createdAt).toLocaleString()}
                    </Td>
                    <Td textAlign={"center"} border={"1px solid"}>
                      {report.userName}
                    </Td>
                    <Td textAlign={"center"} border={"1px solid"}>
                      {authUser && authUser.fullname === report.userName && (
                        <EditIcon
                          cursor="pointer"
                          onClick={() => handleEditClick(report)}
                        />
                      )}
                      {authUser && authUser.fullname != report.userName && (
                        <BellIcon
                          cursor="pointer"
                          onClick={handleNotificationClick}
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

            <Modal
              isOpen={showSubscribeModal}
              onClose={() => setShowSubscribeModal(false)}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Subscribe for updates</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Do you want to subscribe for updates?</p>
                  <Button onClick={handleSubscribe} colorScheme="blue" mt={4}>
                    Subscribe
                  </Button>
                </ModalBody>
              </ModalContent>
            </Modal>

            <Modal
              isOpen={showDescriptionModal}
              onClose={() => setShowDescriptionModal(false)}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Bug Description</ModalHeader>
                <ModalCloseButton />
                <ModalBody mb={5}>
                  <p>{description}</p>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )}
      </Container>
    </Flex>
  );
};

export default BugReports;
