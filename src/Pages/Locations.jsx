import { useEffect, useState } from "react";
import Cards from "../Components/Cards/Cards";
import Group from "./Group";

const Locations = () => {
  let [id, setId] = useState(1);
  let [results, setResults] = useState([]);
  let [data, setDate] = useState([]);

  let { name, type, dimension } = data;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  async function getLocation(api) {
    let response = await fetch(api).then((res) => res.json());
    setDate(response);

    let getResidents = await Promise.all(
        response.residents.map((link)=>{
            return fetch(link).then((res)=>res.json())
        })
    )
    setResults(getResidents)
  }

  useEffect(() => {
    getLocation(api);
  }, [api]);
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <h1 className="text-center">
            Location:{" "}
            <span className="text-primary">
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h4 className="text-center">
            Dimension:{" "}
            <span className="text-primary">
              {dimension === "" ? "Unknown" : dimension}
            </span>
          </h4>
          <h5 className="text-center">
            Type:{" "}
            <span className="text-primary">
              {type === "" ? "Unknown" : type}
            </span>
          </h5>
        </div>
        <div className="row">
            <div className="col-3">
                <h3 className="text-center">Peak Location</h3>
                <Group total={126} name="Location" setId={setId}/>
            </div>
            <div className="col-8">
                <div className="row">
                    <Cards characters={results}/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
