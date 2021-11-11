import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h3>Team Not Found.</h3>
      <Link className="btn not-found-btn" to="/login">create a new team</Link>
    </div>
  );
};

export default NotFound;
