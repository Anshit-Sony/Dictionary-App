import { React, useState } from "react";
import Axios from "axios";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";

function App() {

  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  function getMeaning() {
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
    ).then((response) => {
      setData(response.data[0]);
    });
  }

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div className="searchBox">

        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getMeaning();
          }}
        >
          <FaSearch size="20px" />
        </button>
      </div>
      {data && (
        <div className="showResults">
          <h2>
            {data.word}{" "}
          </h2>
          <h4>Parts of speech:</h4>


          <p>{data.meanings[0].partOfSpeech}</p>


          <h4>Definition:</h4>


          <p>{data.meanings[0].definitions[0].definition}</p>


          <h4>Example:</h4>


          <p>{data.meanings[0].definitions[0].example}</p>

        </div>
      )}
    </div>
  );
}

export default App;
