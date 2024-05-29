import { Box, Button, Input, Textarea, VStack, useToast, Image } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [photo, setPhoto] = useState(null);
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [description, setDescription] = useState("");

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const toast = useToast();

  const handleSubmit = () => {
    if (photo && description) {
      const newPhoto = { id: Date.now(), url: photo, description };
      const updatedPhotos = [...uploadedPhotos, newPhoto];
      setUploadedPhotos(updatedPhotos);
      localStorage.setItem("userPhotos", JSON.stringify(updatedPhotos));
      setPhoto(null);
      setDescription("");
      toast({
        title: "Photo uploaded.",
        description: "Your photo has been uploaded successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error.",
        description: "Please select a photo and enter a description.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input type="file" onChange={handlePhotoChange} />
        <Textarea placeholder="Description" value={description} onChange={handleDescriptionChange} />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Upload
        </Button>
      </VStack>
      <Box mt={8}>
        {uploadedPhotos.map((photo) => (
          <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
            <Image src={photo.url} alt={photo.description} />
            <Box p={4}>
              <Text>{photo.description}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Upload;