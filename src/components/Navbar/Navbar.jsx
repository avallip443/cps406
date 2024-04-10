import { Box, Button, Center, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { Image } from "@chakra-ui/react";

const Sidebar = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/auth"); // Navigate to /auth after logout
  };

  return (
    <Box
      top={0}
      left={0}
      position={"sticky"}
      height={"100vh"}
      borderRight={"5px solid"}
      borderColor={"white"}
      py={8}
      px={{ base: 1, md: 4 }}
      bg={"pink.300"}>
    

      <Flex direction={"column"} gap={5} w="full" height={"full"}>
        <Link
          to={"/HomePage"}
          as={RouterLink}
          display={{ base: "none", md: "block" }}
          pl={2}
          cursor="pointer"
        >
          <Image
          src = "bug.png" 
          boxSize='150px'
          objectFit='scale-down'
          transform="rotate(127deg)">

          </Image>
        </Link>

       
       {/*Home page button*/}
        <Flex 
         direction={"column"} 
         cursor={"pointer"}  
         w={{ base: 10, md: "full" }}
         justifyContent={{ base: "", md: "flex-start" }}
         alignItems={"center"}
         gap={20}
         borderRadius={6}
         mt={{ base: "auto", md: 4 }}
         p={2}>
          <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}>
              Home Page
            </Button>
            
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}>
              Stats Page
            </Button>
            
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}>
              Bugs Page
            </Button>
        </Flex>

        {/* Logout button */}
        <Tooltip
          hasArrow
          label={"Logout"}
          display={{ base: "block", md: "none" }}
          placement="right"
          m={1}
          openDelay={500}
        >
          <Flex
            position="absolute"
            bottom={0}
            left={0}
            w={{ base: "100%", md: "auto" }} 
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems="center"
            gap={4}
            borderRadius={6}
            p={2}
            onClick={handleLogoutClick}
          >
            
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              isLoading={isLoggingOut}
              alignItems="center">
              <Flex alignItems="center" gap={10}> 
               <TbLogout2 size={22} /> 
               Logout 
               </Flex>
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
