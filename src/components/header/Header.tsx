import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginActionCreators, teamActionCreators } from '../../store';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { logout } = bindActionCreators(loginActionCreators, dispatch);
  const { resetTeams } = bindActionCreators(teamActionCreators, dispatch);

  const resetGameHandler = () => {
    logout();
    resetTeams();

    //imperativni navigace neni idealni
    navigate('/login');
  };

  return (
    <header className="header">
      <nav>
        <span>stfuandclick.com</span>
        <div>
          <Link className="btn create-btn" to="/login">
            Create new team
          </Link>
          <button onClick={resetGameHandler} className="btn reset-btn">
            Reset game
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
