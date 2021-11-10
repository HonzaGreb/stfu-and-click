import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { teamActionCreators } from '../../store';

const ClickButton = () => {
  const dispatch = useDispatch();
  const { dispatchClick } = bindActionCreators(teamActionCreators, dispatch);

  const btnClickHandler = () => {
    dispatchClick();
  };

  return <button onClick={btnClickHandler}>Click!</button>;
};

export default ClickButton;
