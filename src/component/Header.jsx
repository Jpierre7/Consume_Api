import React from "react";


import {
    Center
  } from "@chakra-ui/react";

function Header() {
  return (
    <Center bg="#2C5282" h="100px" color="white" pt={10} mb={4}>
      <h1 className="panel-title">Rick and Morty API</h1>
    </Center>
  );
}

export default Header;
