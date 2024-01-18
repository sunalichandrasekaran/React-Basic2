import React, { useState } from "react";

//form
const Form1 = () => {
  const [inputs, setInputs] = useState({ contact: "91" });

  // function for sumbit button
  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
  }

  //getting the values from the input and setting comman name for the values
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    //to get the previous state and current state
    setInputs((previousState) => {
      return { ...previousState, [name]: value };
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Form Page</h1>
        <label>
          Entry Name : <input name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Entry Age : <input name="age" onChange={handleChange} />
        </label>
        <br />
        <label>
          Entry Contact :{" "}
          <input
            name="contact"
            value={inputs.contact}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>location :</label>
        <select name="location" onChange={handleChange}>
          <option value="">select</option>
          <option value="salem">salem</option>
          <option value="mettur">mettur</option>
          <option value="erode">erode</option>
        </select>

        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form1;
