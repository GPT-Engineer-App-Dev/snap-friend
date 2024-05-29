import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";

const Home = () => {
  const photos = [
    { id: 1, url: "https://via.placeholder.com/300", description: "Photo 1" },
    { id: 2, url: "https://via.placeholder.com/300", description: "Photo 2" },
    { id: 3, url: "https://via.placeholder.com/300", description: "Photo 3" },
  ];

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