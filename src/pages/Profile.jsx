import { Box, SimpleGrid, Image, Text, Heading } from "@chakra-ui/react";

const Profile = () => {
  const userPhotos = [
    { id: 1, url: "https://via.placeholder.com/300", description: "My Photo 1" },
    { id: 2, url: "https://via.placeholder.com/300", description: "My Photo 2" },
  ];

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