import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <Container maxW={"100%"}>
      <Navbar />
      <Flex>
        <Box border={"2px solid #aaa"} w={"20%"} h={"90vh"}>
          <Sidebar />
        </Box>
        <Box p={5}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Text
            position={"fixed"}
            right={"20"}
            border={"1px solid #aaa"}
            color={"#aaa "}
            _hover={{ bg: "#ff4d4d", color: "#FFF" }}
            p={2}
            borderRadius={"10px"}
            cursor={"pointer"}
            bottom={"10"}
            onClick={() =>{
              window.open("http://localhost:5174/?username=user1&email=user1@gmail.com&projectId=Company-b")
            }}
          >
            แจ้งปัญหา
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
