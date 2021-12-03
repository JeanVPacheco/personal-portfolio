function Header() {
  return (
    <nav>
      <div className="yellow-bar" />
      <ul className="nav-list">
        <a href="#about">
          <li className="header-component">About</li>
        </a>
        <a href="#skills">
          <li className="header-component">Skills</li>
        </a>
        <a href="#work">
          <li className="header-component">Work</li>
        </a>
      </ul>
    </nav>
  );
}

export default Header;
