import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [emptyInput, setEmptyInput] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setEmptyInput(false);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setEmptyInput(true);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {emptyInput && <h1>Please write something in the field to Add Goal</h1>}
      <div className="form-control">
        <label style={{ color: emptyInput ? "red" : "black" }}>
          Course Goal
        </label>
        <input
          style={{ borderColor: emptyInput ? "red" : "black" }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>

      {/* <div className={`form-control ${emptyInput ? "invalid" : ""}`}>
        <label style={{ color: emptyInput ? "red" : "black" }}>
          Course Goal
        </label>
        <input
          style={{ borderColor: emptyInput ? "red" : "black" }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div> */}

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
