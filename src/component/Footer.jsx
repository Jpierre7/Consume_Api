import React from 'react'
import {
    Center,
    Text
  } from "@chakra-ui/react";
function Footer(props) {
  return (
    <>
    {props.data.results.length>0 && <Center bg='#2C5282' w='100%' p={4} color='white' mt={2}>
              <Text fontSize="xl" fontWeight="bold" mr={2}>Project Api React Js by</Text> 
              <Text fontSize="5xl" fontWeight="bold" color="gray.300">JP 👨‍💻</Text>
        </Center>}
        </>
  )
}

export default Footer