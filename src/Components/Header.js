function Header() {
  return (
    <header>
      <div className="nav-bar" />
      <nav>
        <ul className="nav-list">
          <a href="#about">
            <li className="nav-component">About</li>
          </a>
          <a href="#skills">
            <li className="nav-component">Skills</li>
          </a>
          <a href="#work">
            <li className="nav-component">Work</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
