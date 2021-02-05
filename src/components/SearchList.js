import React, { useState } from "react";

const SearchList = (props) => {
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.childToParent(term);
  };

  return (
    <div
      className="ui container"
      style={{ marginTop: `${10}px`, marginBottom: `${20}px` }}
    >
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Youtube Search Here Happily:</label>
          <input
            type="text"
            name="Search"
            placeholder="Search"
            value={term}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchList;

