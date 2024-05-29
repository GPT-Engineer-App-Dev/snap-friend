import { Box, SimpleGrid, Image, Text, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Profile = () => {
  const [userPhotos, setUserPhotos] = useState([]);

  useEffect(() => {
    const photos = JSON.parse(localStorage.getItem("userPhotos")) || [];
    setUserPhotos(photos);
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>My Profile</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {userPhotos.map((photo) => (
          <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={photo.url} alt={photo.description} />
            <Box p={4}>
              <Text>{photo.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Profile;