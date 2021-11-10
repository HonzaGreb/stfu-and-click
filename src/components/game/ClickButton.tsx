import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { teamActionCreators } from '../../store';
import { State } from '../../store/reducers';

const ClickButton = () => {
  const dispatch = useDispatch();
  const { dispatchClick } = bindActionCreators(teamActionCreators, dispatch);
  const playerTeam = useSelector((state: State) => state.login.name);

  const btnClickHandler = () => {
    dispatchClick(playerTeam);
  };

  return <button onClick={btnClickHandler}>Click!</button>;
};

export default ClickButton;
