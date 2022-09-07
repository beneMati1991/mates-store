import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("./json/categoryData.json")
      .then((response) => response.json())
      .then((data) => {
        const menuOption = data.map((option, indice) => (
          <Link key={indice} to={`/category/${option.categoryId}`}>
            <button className="btn btn-sm btn-light mx-2" type="button">
              {option.categoryDescription}
            </button>
          </Link>
        ))
        setCategories(menuOption)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-5 pb-1 pt-1">
        <div className="col-md-12 text-center">
          <div className="container-fluid">
            {categories}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
