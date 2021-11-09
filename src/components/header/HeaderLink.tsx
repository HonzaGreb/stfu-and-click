import { Link } from 'react-router-dom';

const HeaderLink: React.FC<{ text: string; to: string }> = (props) => {
  return (
    <li>
      <Link to={props.to}>{props.text}</Link>
    </li>
  );
};

export default HeaderLink;
