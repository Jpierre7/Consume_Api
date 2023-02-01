import React, { useEffect, useState } from "react";
import {
  Button,
  ChakraProvider,
  Input,
  InputGroup,
  InputLeftAddon,
  Center,
  Flex
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
        <Center bg='#2C5282' h='100px' color='white' pt={10} mb={4}>
          <h1 className="panel-heading panel-title">Rick and Morty API</h1>
        </Center>

        {/* <div className="search-button"> */}
          <InputGroup className="search-button">
            <InputLeftAddon bg="blue.500" children={<SearchIcon color='white' />} />
            {/* <IconButton aria-label='Search database' icon={<SearchIcon />} /> */}
            <Input
              htmlSize={20} width='auto'
              colorScheme="orange"
              isRequired={false}
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
            >
              Limpiar
            </Button>
          )}
          </InputGroup>
        {/* </div> */}

        
        {data.results.length > 0 && (
          <Flex
            justify="center"
            mt={4}
          >
            <Button
            bg="blue.500"
            color="white"
              isDisabled={!data.info.prev}
              className="button"
              onClick={() => setUrl(data.info.prev)}
            >
              Anterior
            </Button>
            <Button className="button is-primary mx-2">{page}</Button>
            <Button
            bg="blue.500"
            color="white"
              isDisabled={!data.info.next}
              className="button"
              onClick={() => setUrl(data.info.next)}
            >
              Siguiente
            </Button>
          </Flex>
        )}
        <br />
        <div className="container">
          <div className="columns is-desktop is-mobile is-tablet is-multiline is-centered">
            {data.results.map((character) => (
              <div
                className="column is-12-mobile is-4-desktop is-4-tablet"
                key={character.id}
              >
                <div className="card card-style">
                  <div className="card-image justify-content-center">
                    <figure className="image is-128x128">
                      <img loading="lazy" src={character.image} className="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <h1 className="title is-size-5">Name:</h1>
                      </div>
                      <h1>{character.name}</h1>
                    </div>
                    <div className="media">
                      <div className="media-left">
                        <h1 className="title is-size-5">Type:</h1>
                      </div>
                      <p>{character.type || "Not Type"}</p>
                    </div>
                    <div className="media">
                      <div className="media-left">
                        <p className="title is-size-5">Status:</p>
                      </div>
                      <p>{character.status}</p>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <span className="tag is-success mt-2">
                      {character.status}
                    </span>
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </div>

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
