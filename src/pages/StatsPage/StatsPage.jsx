import {
  Box,
  Container,
  Flex,
  Heading,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import useGetBugReports from "../../hooks/useGetBugReports";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StatsPage = () => {
  const { isLoading, reports } = useGetBugReports();
  const [totalBugs, setTotalBugs] = useState(0);
  const [bugsByStatus, setBugsByStatus] = useState({});
  const [bugsByPriority, setBugsByPriority] = useState({});
  const [sprintStats, setSprintStats] = useState({
    sprint1: { total: 0, active: 0, closed: 0 },
    sprint2: { total: 0, active: 0, closed: 0 },
  });

  useEffect(() => {
    if (!isLoading) {
      const sprintCutoff = new Date("4/11/2024").getTime();
      let sprint1 = { total: 0, active: 0, closed: 0 };
      let sprint2 = { total: 0, active: 0, closed: 0 };

      reports.forEach((report) => {
        const createdAt = new Date(report.createdAt).getTime();
        const sprint = createdAt < sprintCutoff ? "sprint1" : "sprint2";
        const isClosed = report.bugStatus.toLowerCase() === "closed";

        // Increment counters for sprint stats
        sprint === "sprint1" ? sprint1.total++ : sprint2.total++;
        if (isClosed) {
          sprint === "sprint1" ? sprint1.closed++ : sprint2.closed++;
        } else {
          sprint === "sprint1" ? sprint1.active++ : sprint2.active++;
        }

        // Count bugs by status
        bugsByStatus[report.bugStatus] =
          (bugsByStatus[report.bugStatus] || 0) + 1;

        // Count bugs by priority
        bugsByPriority[report.priorityLevel] =
          (bugsByPriority[report.priorityLevel] || 0) + 1;
      });

      setSprintStats({ sprint1, sprint2 });
      setTotalBugs(reports.length);
      setBugsByStatus(bugsByStatus);
      setBugsByPriority(bugsByPriority);
    }
  }, [isLoading, reports]);

  // After setting sprint statistics in the useEffect hook
  const graphData = {
    labels: ["Sprint 1", "Sprint 2"], // Extend this based on the number of sprints you have
    datasets: [
      {
        label: "New Bugs",
        data: [
          sprintStats.sprint1.total - sprintStats.sprint1.closed,
          sprintStats.sprint2.total - sprintStats.sprint2.closed,
        ], // Assuming 'total' includes both 'active' and 'closed'
        borderColor: "#FA9EBC",
        backgroundColor: "#FA9EBC",
      },
      {
        label: "Closed Bugs",
        data: [sprintStats.sprint1.closed, sprintStats.sprint2.closed],
        borderColor: "#0B1957",
        backgroundColor: "#0B1957",
      },
    ],
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <>
      <Flex bgColor={"#f8f3ea"}>
        <Navbar />
        <Container maxW="container.lg" my={12}>
          <VStack spacing={5} align="stretch">
            <Heading color={"#0B1957"} textAlign={"center"}>
              Bug Statistics
            </Heading>

            <Container
              maxW={"container.lg"}
              bgColor={"pink.200"}
              borderRadius={10}
              py={5}
            >
              <Table>
                <Thead text>
                  <Tr bgColor={"gray.200"}>
                    <Th
                      color={"black"}
                      textAlign={"center"}
                      border={"1px solid"}
                    >
                      Total Bugs
                    </Th>
                    <Th
                      color={"black"}
                      textAlign={"center"}
                      border={"1px solid"}
                    >
                      Bugs by Status
                    </Th>
                    <Th
                      color={"black"}
                      textAlign={"center"}
                      border={"1px solid"}
                    >
                      Bugs by Priority Level
                    </Th>
                    <Th
                      color={"black"}
                      textAlign={"center"}
                      border={"1px solid"}
                    >
                      Bugs by Sprint
                    </Th>
                  </Tr>
                </Thead>
                <Tbody color={"black"}>
                  <Tr _even={{ bg: "pink.100" }} _odd={{ bg: "white" }}>
                    <Td textAlign={"center"} border={"1px solid"}>{totalBugs}</Td>
                    <Td textAlign={"center"} border={"1px solid"}>
                      {Object.entries(bugsByPriority).map(([level, count]) => (
                        <Text
                          key={level}
                          color="#0B1957"
                        >{`${level}: ${count}`}</Text>
                      ))}
                    </Td>
                    <Td textAlign={"center"} border={"1px solid"}>
                      {Object.entries(bugsByStatus).map(([status, count]) => (
                        <Text
                          key={status}
                          color="#0B1957"
                        >{`${status}: ${count}`}</Text>
                      ))}
                    </Td>
                    <Td textAlign={"center"} border={"1px solid"}>
                      <Text color="#0B1957">
                        Sprint 1 - Total: {sprintStats.sprint1.total}, Active:{" "}
                        {sprintStats.sprint1.active}, Closed:{" "}
                        {sprintStats.sprint1.closed}
                      </Text>
                      <Text color="#0B1957">
                        Sprint 2 - Total: {sprintStats.sprint2.total}, Active:{" "}
                        {sprintStats.sprint2.active}, Closed:{" "}
                        {sprintStats.sprint2.closed}
                      </Text>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Container>

            {/* Add the graph component here */}
            <Box>
              <Heading size="lg" color="#0B1957" textAlign={'center'} mt={6} mb={4}>
                Bug Trends by Sprint
              </Heading>
              <Line data={graphData} />
            </Box>
            {/* Any additional content below */}
          </VStack>
        </Container>
      </Flex>
    </>
  );
};

export default StatsPage;
