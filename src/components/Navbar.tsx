import { Box, Flex } from "@chakra-ui/react"

function Navbar() {
  return (
    <Flex justifyContent={"space-between"} p={5} color={"#fff"} bg={'#000'}>
        <Box>Company B</Box>
        <Box>user1@gmail.com</Box>
    </Flex>
  )
}

export default Navbar