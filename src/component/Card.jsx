import React from 'react'


import {
    Flex,
    Grid,
    GridItem,
    Card as ChakraCard,
    CardBody,
    Divider,
    CardFooter,
    Image,
    HStack,
    Text,
    Tag,
  } from "@chakra-ui/react";

function Card(props) {
  return (
    <Flex justify="center">
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
            {props.data.results.map((character) => (
              <GridItem key={character.id}>
                <ChakraCard align='center'>
                  <CardBody mt={2} align='center'>
                    <Image
                      borderRadius="full"
                      boxSize="150px"
                      src={character.image}
                    />
                    <HStack mt={2}>
                      <Text fontSize='xl' fontWeight='bold'>NAME:</Text>
                      <Text>{character.name}</Text>
                    </HStack>
                    <HStack mt={2}>
                      <Text fontSize='xl' fontWeight='bold'>TYPE:</Text>
                      <Text>{character.type || "Not Type"}</Text>
                    </HStack>
                    <HStack mt={2}>
                      <Text fontSize='xl' fontWeight='bold'>STATUS:</Text>
                      <Text>{character.status}</Text>
                    </HStack>
                  </CardBody>
                  <HStack justify="center">
                    <CardFooter>
                      <Tag
                        size="md"
                        key="md"
                        variant="solid"
                        colorScheme="teal"
                      >
                        {character.status}
                      </Tag>
                    </CardFooter>
                  </HStack>
                </ChakraCard>
              </GridItem>
            ))}
          </Grid>
        </Flex>
  )
}

export default Card