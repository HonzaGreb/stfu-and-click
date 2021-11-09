import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <span>stfuandclick.com</span>
        <ul>
          <HeaderLink to='' text='Route 1'/>
          <HeaderLink to='' text='Route 2'/>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
