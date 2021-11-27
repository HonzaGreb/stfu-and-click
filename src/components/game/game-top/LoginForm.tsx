import React, { useState, useEffect, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { State } from '../../../store/reducers'
import { loginActionCreators, teamActionCreators, authActionCreators } from '../../../store'
import { Session } from '../../../models/Session'
import { AuthObject } from '../../../models/Auth'

type InputEvent = React.ChangeEvent<HTMLInputElement>
type SubmitEvent = React.FormEvent<HTMLFormElement>

const LoginForm = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [isValid, setisValid] = useState<boolean>(false)
  const [nameTaken, setNameTaken] = useState<boolean>(false)
  const [userId, setUserId] = useState<string>('')

  const dispatch = useDispatch()
  const { login, logout } = bindActionCreators(loginActionCreators, dispatch)
  const { addTeam } = bindActionCreators(teamActionCreators, dispatch)
  const { storeAuth, clearAuth } = bindActionCreators(authActionCreators, dispatch)
  const teams = useSelector((state: State) => state.team)

  const navigate = useNavigate()

  const writeAuthData = async () => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBl1_l6lNxJOtfzcrIBS579DXkjdgdrQeU ',
      { method: 'POST', headers: { 'Content-Type': 'application/json' } }
    )

    if (!response.ok) {
      throw new Error('Creating User Failed')
    }

    const data: AuthObject = await response.json()
    storeAuth(data)
    setUserId(data.localId)
  }

  const inputChangeHandler = (e: InputEvent) => {
    setNameTaken(false)
    const inputValue = e.currentTarget.value

    if (inputValue.length > 0) {
      setisValid(true)
    } else {
      setisValid(false)
    }

    setInputValue(inputValue)
  }

  const formSubmitHandler = (e: SubmitEvent) => {
    e.preventDefault()
    const enteredName = inputValue.trim()

    if (teams.find((team) => team.name === enteredName)) {
      setNameTaken(true)
      return
    }

    const sessionData: Session = {
      team: enteredName,
      session: userId,
    }

    if (enteredName.length > 0) {
      addTeam({
        name: enteredName,
        id: userId,
        clicks: { yourClicks: 0, teamClicks: 0 },
      })
      login(sessionData)
      navigate(`/${userId}`)
      setInputValue('')
    }

    return
  }

  // ↓ Create A New Anonymous User on Component Mount

  useEffect(() => {
    try {
      writeAuthData()
    } catch (e) {
      console.log(e)
    }
  }, [])

  // ↓ Logout And Delete Auth Data on Component Mount

  useEffect(() => {
    logout()
    clearAuth()
  }, []) // eslint-disable-line

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler} className='login-form'>
        <div>
          <label htmlFor='login-input'>Enter your team name:</label>
          <input
            type='text'
            id='login-input'
            placeholder='Team name'
            onChange={inputChangeHandler}
            value={inputValue}
          ></input>
        </div>
        <button className='btn' disabled={!isValid}>
          Click!
        </button>
      </form>
      {nameTaken && <p className='name-taken'>Team already exists. Choose a different name.</p>}
    </Fragment>
  )
}

export default LoginForm
