import React, { useState } from 'react'
import axios from 'axios';
import Search from './Search';
import Popup from './Popup';
import Results from './Results';

function SearchMovie() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const apiurl = "http://localhost:2345";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "?movie_name=" + state.s).then(({ data }) => {
      
        let results = data;
        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }
  const openPopup = openpopup_url => {
    axios(openpopup_url).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <main>
        <Search handleInput={handleInput} search={search} />

        { <Results results={state.results} openPopup={openPopup} /> }

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default SearchMovie
