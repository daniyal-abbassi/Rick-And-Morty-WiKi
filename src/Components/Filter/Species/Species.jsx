import "../Gender/gender.css"
const Species = ({ setSpecies,setPage }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Species
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-3 ">
            {species.map((btn) => {
              return (
                <div className="form-check" key={btn}>
                  <input
                  onClick={()=>{
                    setSpecies(btn)
                    setPage(1)
                  }}
                    className="form-check-input  d-none"
                    type="radio"
                    name="flexRadioDefault"
                    id={btn}
                  />
                  <label className="form-check-label btn btn-outline-primary" htmlFor={btn}>
                    {btn}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Species;
