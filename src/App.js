import React, { useState, useEffect } from "react";

import CardList from "./CardList";

import "./styles.css";

function exportToJsonFile(jsonData) {
  let dataStr = JSON.stringify(jsonData);
  let dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  let exportFileDefaultName = "data.json";

  let linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();
}

export default function App() {
  const [grantData, setGrantData] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let proxyUrl = "https://cors-anywhere.herokuapp.com/";
      let targetUrl =
        "https://www.sbir.gov/api/solicitations.json?keyword=sbir";

      try {
        const res = await fetch(proxyUrl + targetUrl);

        const data = await res.json();
        console.log(data);
        setGrantData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  console.log(favorite);

  return (
    <div className="App">
      <header></header>
      <h1>SBIR Solications</h1>

      {grantData === [] ? (
        "Loading"
      ) : (
        <CardList
          grantData={grantData}
          setFavorite={setFavorite}
          favorite={favorite}
        />
      )}
      <div className="download">
        <p className="download_text">Click Here to Download Favored Grants</p>

        <button
          onClick={() => {
            exportToJsonFile(favorite);
          }}
        >
          Download
        </button>
      </div>
      <footer></footer>
    </div>
  );
}
