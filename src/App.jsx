import React, { useEffect, useState } from "react";
import {
  Button,
  ChakraProvider,
  Input,
  InputGroup,
  InputLeftAddon,
  Center,
  Flex,
  Grid,
  GridItem,
  Card,
  CardBody,
  Divider,
  CardFooter,
  Image,
  HStack,
  Text,
  Tag,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
function App() {
  const [data, setData] = useState({ info: {}, results: [] });
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  useEffect(
    (e) => {
      if (!url) return;
      const newUrl = url.split("&name=")[0];
      const search = async () => {
        let data = await fetch(`${newUrl}&name=${name}`);
        let result = await data.json();
        setData(result);
        setPage(newUrl.split("page=")[1]);
        console.log(result);
      };
      search();
    },
    [url, name]
  );
  const clear = () => {
    console.log("Hola Mundo");
  };
  return (
    <React.Fragment>
      <ChakraProvider>
        <Center bg="#2C5282" h="100px" color="white" pt={10} mb={4}>
          <h1 className="panel-title">Rick and Morty API</h1>
        </Center>
        <InputGroup className="search-button">
          <InputLeftAddon
            bg="blue.500"
            children={<SearchIcon color="white" />}
            ml={{ base: "2" }}
          />
          <Input
            htmlSize={20}
            width="auto"
            colorScheme="orange"
            value={name}
            size="md"
            type="text"
            placeholder="Search"
            onChange={({ target }) => setName(target.value)} //deestrutura para react js
          />
          <Button
            bg="blue.500"
            color="white"
            size="md"
            mx={2}
            onClick={() =>
              setUrl("https://rickandmortyapi.com/api/character/?page=1")
            }
          >
            Consultar
          </Button>
          {data.results.length > 0 && (
            <Button
              bg="red.500"
              color="white"
              size="md"
              onClick={() => {
                setData({ info: {}, results: [] });
                setUrl("");
              }}
              mr={{ base: "2" }}
            >
              Limpiar
            </Button>
          )}
        </InputGroup>

        {data.results.length > 0 && (
          <Flex justify="center" mt={4}>
            <Button
              bg="blue.500"
              color="white"
              isDisabled={!data.info.prev}
              onClick={() => setUrl(data.info.prev)}
            >
              Anterior
            </Button>
            <Button mx={2}>{page}</Button>
            <Button
              bg="blue.500"
              color="white"
              isDisabled={!data.info.next}
              onClick={() => setUrl(data.info.next)}
            >
              Siguiente
            </Button>
          </Flex>
        )}
        <br />
        <Flex justify="center">
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
            {data.results.map((character) => (
              <GridItem key={character.id}>
                <Card align='center'>
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
                </Card>
              </GridItem>
            ))}
          </Grid>
        </Flex>

        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Project Api React Js</strong> by
              <span className="is-size-4 has-text-primary">JP👨‍💻</span>.
            </p>
          </div>
        </footer>
      </ChakraProvider>
    </React.Fragment>
  );
}

export default App;
