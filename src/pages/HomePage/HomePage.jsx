import { Container, Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <Flex>
        <Navbar />
      </Flex>
      <div>
        <p color={"green"}>hi</p>
        <button>bye</button>
      </div>
    </>
  );
};

export default HomePage;
