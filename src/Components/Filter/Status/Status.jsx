import "../Gender/gender.css"


const Status = ({setStatus,setPage}) => {
  
  let statuses = ["Dead","Alive","Unknown"]
  
    return (
    <div>
       <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Type
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body d-flex flex-wrap gap-3">
            {statuses.map((btn)=>{
        return (
            <div className="form-check" key={btn}>
              <input
              onClick={()=>{
                setStatus(btn)
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
  )
}

export default Status
