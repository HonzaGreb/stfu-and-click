import { Link } from 'react-router-dom';

const HeaderLink: React.FC<{ text: string; linkTo: string }> = (props) => {
  return (
    <li>
      <Link to={props.linkTo}>{props.text}</Link>
    </li>
  );
};

export default HeaderLink;
