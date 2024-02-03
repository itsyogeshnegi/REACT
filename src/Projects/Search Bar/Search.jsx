import React, { useState } from "react";

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ height: "40px", textAlign: "center", width: "250px" }}
      />
      <ul>
        {searchTerm
          ? filteredData.map((item, index) => <li key={index}>{item}</li>)
          : null}
      </ul>
    </div>
  );
};

export default Search;
