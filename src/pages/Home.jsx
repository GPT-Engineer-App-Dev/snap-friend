import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const photos = JSON.parse(localStorage.getItem("userPhotos")) || [];
    setPhotos(photos);
  }, []);

  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {photos.map((photo) => (
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

export default Home;