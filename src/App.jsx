import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Search from "./Components/Search/Search";
import Pagination from "./Components/Page/Pagination";
import Filter from "./Components/Filter/Filter";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Navbar from "./Components/Navbar/Navbar";
import Locations from "./Pages/Locations";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/locations" element={<Locations />} />
    </Routes>
  
  </BrowserRouter>
  )
  
}
function Home() {

  let [data, setData] = useState([]);
  let [page,setPage] = useState(1);
  let [name,setName] = useState("");
  let [status,setStatus] = useState("");
  let [species,setSpecies] = useState("");
  let [type,setType] = useState("");
  let [gender,setGender] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`;
  let { info, results } = data;
  
  async function getData(api) {
    let data = await fetch(api).then((res) => res.json());
    setData(data);
  }

  useEffect(() => {
    getData(api);
  }, [api]);

  console.log(results)
  return (
    <>
      
      <Search searchName={setName}/>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter setPage={setPage} results={results} setStatus={setStatus} setSpecies={setSpecies} setType={setType} setGender={setGender}/>
          </div>
          <div className="col-8">
            <div className="row">
              <Cards characters={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination setPage={setPage} info={info} total={42}/>
    </>
  );
}

export default App;
