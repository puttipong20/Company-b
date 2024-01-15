import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate()
  return (
    <Box>
      <Text
        onClick={() => navigate("/")}
        textAlign={"center"}
        py={3}
        cursor={"pointer"}
        borderRadius={"15px"}
        _hover={{ bg: "#000", color: "#fff" }}
      >
        Home
      </Text>
      <Text
        onClick={() => navigate("/about")}
        textAlign={"center"}
        py={3}
        cursor={"pointer"}
        borderRadius={"15px"}
        _hover={{ bg: "#000", color: "#fff" }}
      >
        About
      </Text>
      <Text
        onClick={() => navigate("/contact")}
        textAlign={"center"}
        py={3}
        cursor={"pointer"}
        borderRadius={"15px"}
        _hover={{ bg: "#000", color: "#fff" }}
      >
        Contact
      </Text>
    </Box>
  );
}

export default Sidebar;
