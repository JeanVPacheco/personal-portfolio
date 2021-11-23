function Header() {
  return (
    <>
      <nav>
        <div className="yellow-bar" />
        <ul>
          <a href="#about">
            <li className="header-component">About</li>
          </a>
          <a href="#skills">
            <li className="header-component">Skills</li>
          </a>
          <li className="header-component">Work</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
