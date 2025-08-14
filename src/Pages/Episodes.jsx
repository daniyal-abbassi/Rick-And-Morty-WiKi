import { useEffect, useState } from "react";
import Cards from "../Components/Cards/Cards";
import Group from "./Group";

export default function Episodes() {
  let [id, setId] = useState(1);
  let [data, setData] = useState([]);
  let [results, setResults] = useState([]);
  let { name, air_date } = data;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  async function getEpisodes(api) {
    let response = await fetch(api).then((res) => res.json());
    setData(response);
    let characterDetails = await Promise.all(
      response.characters.map((link) => {
        return fetch(link).then((res) => res.json());
      })
    );
    setResults(characterDetails);
  }
  useEffect(() => {
    getEpisodes(api);
  }, [api]);

  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <h1 className="fw-bold text-center my-4">
          Episode:{" "}
          <span className="text-primary ">
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <div className="text-center fs-5 mb-4">
          air date:{" "}
          <span className="text-primary">
            {air_date === "" ? "Unknown" : air_date}
          </span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-3"><h2 className="fw-bold fs-5 text-center mb-4">Peak Episode</h2> 
            <Group total={52} name="Episode" setId={setId} data={data}/>
        </div>
        <div className="col-8">
            <div className="row">
            <Cards characters={results} />
            </div>
          
        </div>
      </div>
    </div>
  );
}
