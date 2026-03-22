"use client";
import { useState } from "react";

export function FormContent({ inputs, typeForm }) {
  const [inputsElments, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs({
      ...inputsElments,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form');
    
  };

  return (
    <>
      {inputs.map((input) => (
        <div key={input.name} className="form-control">
          <label htmlFor={input.name}>{input.name}</label>
          <input
            type={input.type}
            id={input.name}
            placeholder={input.placeholder}
            name={input.name}
            onChange={handleChange}
          />
        </div>
      ))}

      <button type="submit" onClick={handleSubmit}>
        {typeForm}
      </button>
    </>
  );
}
