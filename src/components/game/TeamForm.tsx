import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginActionCreators } from '../../store';
import { Session } from '../../models/Session';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLFormElement>;

const TeamForm = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();
  const { login } = bindActionCreators(loginActionCreators, dispatch);

  const inputChangeHandler = (e: InputEvent) => {
    const inputValue = e.currentTarget.value;

    setInputValue(inputValue.trim());
  };

  const generateSessionId = (length: number) => {
    let result = '';
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const formSubmitHandler = (e: SubmitEvent) => {
    e.preventDefault();
    const randomSessionId = generateSessionId(7);

    const sessionData: Session = { team: inputValue, session: randomSessionId };
    setInputValue('');
    login(sessionData);
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
        <button>Click</button>
      </form>
    </section>
  );
};

export default TeamForm;
