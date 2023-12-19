import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-20 bg-primary grid place-items-center drop-shadow-lg">
      <li className="flex justify-between w-1/5 ">
        <ul className="p-4 hover:bg-accent cursor-pointer rounded-lg">🏠</ul>
        <ul className="p-4 hover:bg-accent cursor-pointer rounded-lg">⚙️</ul>
        <ul className="p-4 hover:bg-accent cursor-pointer rounded-lg">❓</ul>
      </li>
    </div>
  );
};

export default NavBar;
