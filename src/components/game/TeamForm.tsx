import React, { useState } from 'react';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLFormElement>;

const TeamForm: React.FC<{ onFormSubmit: (a: string) => never }> = (props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const inputChangeHandler = (e: InputEvent) => {
    const inputValue = e.currentTarget.value;

    if (typeof inputValue === 'string' && inputValue.length > 0) {
      setInputValue(inputValue.trim());
    }
  };

  const formSubmitHandler = (e: SubmitEvent) => {
    e.preventDefault();
    props.onFormSubmit(inputValue);
    setInputValue('');
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
