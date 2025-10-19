import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriesPromise);
  // console.log(categories)
  return (
    <div>
      <h2 className="font-bold">All Categories ({categories.length})</h2>
      <div className="sidebar grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className="btn border-0 bg-base-100 hover:bg-base-200 font-semibold text-accent"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
