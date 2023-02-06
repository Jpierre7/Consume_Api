import React from 'react'


import {
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    Flex
  } from "@chakra-ui/react";
  import {SearchIcon} from "@chakra-ui/icons"

function Controls(props) {
  return (
    <>
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
            value={props.name}
            size="md"
            type="text"
            placeholder="Search"
            onChange={({ target }) => props.setName(target.value)} //deestrutura para react js
          />
          <Button
            bg="blue.500"
            color="white"
            size="md"
            mx={2}
            onClick={() =>
              props.setUrl("https://rickandmortyapi.com/api/character/?page=1")
            }
          >
            Consultar
          </Button>
          {props.data.results.length > 0 && (
            <Button
              bg="red.500"
              color="white"
              size="md"
              onClick={() => {
                props.setData({ info: {}, results: [] });
                props.setUrl("");
              }}
              mr={{ base: "2" }}
            >
              Limpiar
            </Button>
          )}
        </InputGroup>

        {props.data.results.length > 0 && (
          <Flex justify="center" mt={4}>
            <Button
              bg="blue.500"
              color="white"
              isDisabled={!props.data.info.prev}
              onClick={() => props.setUrl(props.data.info.prev)}
            >
              Anterior
            </Button>
            <Button mx={2}>{props.page}</Button>
            <Button
              bg="blue.500"
              color="white"
              isDisabled={!props.data.info.next}
              onClick={() => props.setUrl(props.data.info.next)}
            >
              Siguiente
            </Button>
          </Flex>
        )}
        </>
  )
}

export default Controls