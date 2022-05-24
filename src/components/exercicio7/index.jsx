import React, { useState } from "react";

import "./index.css";

function Exercicio7() {
  const [nameValue, setNameValue] = useState("");
  const [lastnameValue, setLastNameValue] = useState("");

  const handlenameChange = (e) => {
    setNameValue(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastNameValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${nameValue} ${lastnameValue}`);
    setNameValue("");
    setLastNameValue("");
  };

  return (
    <section className="formWrapper">
      <form className="form" onSubmit={handleSubmit}>
        <input
        placeholder="First Name"
          className="form__input"
          onChange={handlenameChange}
          value={nameValue}
        ></input>
        <input
         placeholder="Last Name"
          className="form__input"
          onChange={handleLastNameChange}
          value={lastnameValue}
        ></input>
        <button className="form__btn">GREET ME</button>
      </form>
    </section>
  );
}

export default Exercicio7;
