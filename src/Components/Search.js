import React from "react";

const Search = ({ setSearch }) => {
  return (
    <input
      type={"text"}
      placeholder="Aramak istediğiniz kelimeyi yazınız.."
      className="w-full px-4 py-5 border border-black rounded-md focus:outline-none border-opacity-10"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Search;
