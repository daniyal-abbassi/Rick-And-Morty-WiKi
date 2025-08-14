import Gender from "./Gender/Gender";
import Species from "./Species/Species";
import Status from "./Status/Status";

export default function Filter({ setPage,setGender, results, setSpecies, setStatus }) {
  return (
    <>
      <h2 className="text-center fw-bold mb-4">Filter</h2>
      
      <div className="accordion" id="accordionExample">
        <Gender setGender={setGender} setPage={setPage} />
        <Species setSpecies={setSpecies} setPage={setPage}/>
        <Status setStatus={setStatus} setPage={setPage}/>
      </div>
      <button
        onClick={() => {
          setGender(""), setSpecies(""), setStatus(""); setPage(1), window.location.reload(false)
        }}
        className="btn btn-outline mt-3 w-50"
      >
        Clear Filter
      </button>

    </>
  );
}
