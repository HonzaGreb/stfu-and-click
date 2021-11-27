import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { teamActionCreators } from '../../../store'
import { State } from '../../../store/reducers'

const ClickButton: React.FC<{ disabled: boolean }> = (props) => {
  const dispatch = useDispatch()
  const { dispatchClick } = bindActionCreators(teamActionCreators, dispatch)
  const playerTeam = useSelector((state: State) => state.login.session)

  const btnClickHandler = () => {
    dispatchClick(playerTeam)
  }

  return (
    <button className='btn click-btn' onClick={btnClickHandler} disabled={props.disabled}>
      Click!
    </button>
  )
}

export default ClickButton
