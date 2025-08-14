import "./search.css";

export default function Search({ searchName }) {
  return (
    <>
      <div className="text-center container input-button d-flex my-5"> 
          <input
            onChange={(e) => {
              searchName(e.target.value);
            }}
            type="text"
            className="form-control fs-5 p-2 mx-4"
            placeholder="Seach Characters"
          />
            <button
              className="btn btn-primary fw-bold fs-5 p-2"
              type="button"
            >
              Search{" "}
            </button>
      </div>
    </>
  );
}
