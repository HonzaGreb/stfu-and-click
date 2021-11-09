import React, { useState } from 'react';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLFormElement>;

// { onFormSubmit: (a: string) => void }

const TeamForm = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const inputChangeHandler = (e: InputEvent) => {
    const inputValue = e.currentTarget.value;

    // might add more validation

    if (typeof inputValue === 'string' && inputValue.length > 0) {
      setInputValue(inputValue.trim());
    }
  };

  const formSubmitHandler = (e: SubmitEvent) => {
    e.preventDefault();
    setInputValue('');
    // dispatch logic
  };

  // mozna zmenit placeholder, co myslis, hochu

  return (
    <section>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          id="login-input"
          placeholder="Yo mom"
          onChange={inputChangeHandler}
          value={inputValue}
        ></input>
        <label htmlFor="login-input">Enter Your Team Name:</label>
      </form>
    </section>
  );
};

export default TeamForm;
