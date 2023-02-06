import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Center,
  Text
} from "@chakra-ui/react";
import Card from './component/Card'
import Controls from './component/Controls'
import Header from "./component/Header";
import Footer from "./component/Footer";
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
      <ChakraProvider>
        <Header/>
        <Controls data={data} setUrl={setUrl} page={page} setData={setData} setName={setName} name={name}/>
        <Card data={data}/>
        <Footer data={data}/>
      </ChakraProvider>
  );
}

export default App;
