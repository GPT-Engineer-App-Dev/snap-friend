import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <Text fontSize="2xl" fontWeight="bold">
          PhotoShare
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/profile" mx={2}>
            Profile
          </Link>
          <Link as={RouterLink} to="/upload" mx={2}>
            Upload
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;