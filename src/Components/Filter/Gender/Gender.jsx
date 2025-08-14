import "./gender.css"

export default function Gender({ setGender, setPage }) {
  let genders = ["female", "male", "genderless", "unknown"];

  return (
    <div>
      
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Gender
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((btn) => {
        return (
            <div className="form-check" key={btn}>
              <input
              onClick={()=>{
                setGender(btn)
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
}
