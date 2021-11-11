import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../../../store/reducers';
import { loginActionCreators, teamActionCreators } from '../../../store';
import { Session } from '../../../models/Session';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLFormElement>;

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

const LoginForm = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isValid, setisValid] = useState<boolean>(false);
  const [nameTaken, setNameTaken] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { login, logout } = bindActionCreators(loginActionCreators, dispatch);
  const { addTeam } = bindActionCreators(teamActionCreators, dispatch);
  const teams = useSelector((state: State) => state.team);

  const navigate = useNavigate();

  const inputChangeHandler = (e: InputEvent) => {
    setNameTaken(false);
    const inputValue = e.currentTarget.value;

    if (inputValue.length > 0) {
      setisValid(true);
    } else {
      setisValid(false);
    }

    setInputValue(inputValue);
  };

  const formSubmitHandler = (e: SubmitEvent) => {
    e.preventDefault();
    const enteredName = inputValue.trim();

    if (teams.find((team) => team.name === enteredName)) {
      setNameTaken(true);
      return;
    }

    const sessionId = generateSessionId(7);
    const sessionData: Session = {
      team: enteredName,
      session: sessionId,
    };

    if (enteredName.length > 0) {
      addTeam({
        name: enteredName,
        id: sessionId,
        clicks: { yourClicks: 0, teamClicks: 0 },
      });
      login(sessionData);
      navigate(`/${sessionId}`);
      setInputValue('');
    }
    return;
  };

  // ↓ Logout on Component Mount

  useEffect(() => {
    logout();
  }, []); // eslint-disable-line

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler} className="login-form">
        <div>
          <label htmlFor="login-input">Enter your team name:</label>
          <input
            type="text"
            id="login-input"
            placeholder="Team name"
            onChange={inputChangeHandler}
            value={inputValue}
          ></input>
        </div>
        <button className="btn" disabled={!isValid}>
          Click!
        </button>
      </form>
      {nameTaken && (
        <p className="name-taken">
          Team already exists. Choose a different name.
        </p>
      )}
    </Fragment>
  );
};

export default LoginForm;
