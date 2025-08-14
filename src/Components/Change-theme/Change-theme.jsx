import { useEffect, useState } from "react";

const ChangeTheme = () => {
  let [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  let handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);
  return (
    <>
      <li className="nav-item align-items-center d-flex fs-5">
        <i className="fas fa-sun"></i>

        <div className="ms-2 form-check form-switch">
          <input
          onChange={handleChangeTheme}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="themingSwitcher"
          />
        </div>
        <i className="fas fa-moon"></i>
      </li>
      
    </>
  );
};

export default ChangeTheme;
