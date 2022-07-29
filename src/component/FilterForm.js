import React from "react";

const FilterForm = (props) => {
  return (
    <div className="conatiner-fluid">
      <select class="form-control">
        <option>Default select</option>
      </select>
      <p>{props.task}</p>
    </div>
  );
};

export default FilterForm;
