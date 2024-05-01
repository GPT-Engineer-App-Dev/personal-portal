import { Box, Flex, Text, Heading, VStack, Button, Image, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" p={4} justifyContent="space-between" alignItems="center" bg="gray.800" color="white">
        <Heading size="lg">GPT Engineer</Heading>
        <Box>
          <Link href="#about" p={2}>About</Link>
          <Link href="#portfolio" p={2}>Portfolio</Link>
          <Link href="#contact" p={2}>Contact</Link>
        </Box>
      </Flex>
      <Box id="about" p={4}>
        <Heading size="xl" textAlign="center">About Me</Heading>
        <Text fontSize="lg" mt={4}>
          Passionate web developer with a knack for creating engaging and efficient user experiences.
          Skilled in modern web technologies and always eager to adopt innovative solutions.
        </Text>
      </Box>
      <Box id="portfolio" p={4} bg="gray.100">
        <Heading size="xl" textAlign="center">Portfolio</Heading>
        <VStack spacing={4} mt={4}>
          <Image src="path/to/portfolio1.jpg" alt="Project 1" boxSize="100%" objectFit="cover" />
          <Image src="path/to/portfolio2.jpg" alt="Project 2" boxSize="100%" objectFit="cover" />
        </VStack>
      </Box>
      <Box id="contact" p={4}>
        <Heading size="xl" textAlign="center">Contact</Heading>
        <Flex justifyContent="center" mt={4}>
          <Link href="https://github.com" isExternal><Button leftIcon={<FaGithub />}>GitHub</Button></Link>
          <Link href="https://linkedin.com" isExternal><Button leftIcon={<FaLinkedin />} ml={2}>LinkedIn</Button></Link>
          <Link href="mailto:example@example.com"><Button leftIcon={<FaEnvelope />} ml={2}>Email</Button></Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;