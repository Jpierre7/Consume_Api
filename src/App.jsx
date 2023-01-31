import React, { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState({info:{},results:[]})
    const [url, setUrl] = useState('')
    const [page, setPage] = useState(1)
    const [name, setName] = useState("")
    useEffect((e)=>{
      if(!url) return
      const newUrl = url.split('&name=')[0];
      const search = async () => {
        let data = await fetch(`${newUrl}&name=${name}`)
        let result = await data.json();
        setData(result)
        setPage(newUrl.split('page=')[1])
        console.log(result);
      }
      search()
    }, [url, name])
    const clear = () => {
      console.log("Hola Mundo");
    }
  return (
    <React.Fragment>
      <nav className="panel is-primary">
        <h1 className="panel-heading panel-title">Rick and Morty API</h1>
      </nav>

      <div className="search-button">
        <p className="control has-icons-left">
          <input
            value={name}
            className="input is-primary"
            type="text"
            placeholder="Search"
            onChange={({target}) => setName(target.value) } //deestrutura para react js
          />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
        <br />
        <button className="button is-success" onClick={()=>setUrl('https://rickandmortyapi.com/api/character/?page=1')}>
          Consultar
        </button>
        {data.results.length>0 && <button
          className="button is-danger"
          onClick={()=>{setData({info:{},results:[]}); setUrl('')}}
        >
          Limpiar
        </button>}
      </div>
      <br />
       <div className="container">
        <div className="columns is-desktop is-mobile is-tablet is-multiline is-centered">
          {data.results.map(character=>(<div
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
                  <h1>{ character.name }</h1>
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
                  <p>{ character.status }</p>
                </div>
              </div>
              <footer className="card-footer">
                <span className="tag is-success mt-2">{ character.status }</span>
              </footer>
            </div>
          </div>))}
        </div>
      </div>
      
      {data.results.length > 0 && <nav
        className="is-flex is-justify-content-center my-2"
        role="navegation"
        aria-label="pagination"
      >
        <button
          disabled={!data.info.prev}
          className="button"
          onClick={()=>setUrl(data.info.prev)}
        >
          Anterior
        </button>
        <button className="button is-primary mx-2">{page}</button>
        <button
          disabled={!data.info.next}
          className="button"
          onClick={()=>setUrl(data.info.next)}
        >
          Siguiente
        </button>
      </nav>}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Project Api Vue Js</strong> by
            <span className="is-size-4 has-text-primary">JP👨‍💻</span>.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
