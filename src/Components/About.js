import profile from '../Images/profile-picture.png';
import github from '../Images/logos/github_logo.svg';
import linkedin from '../Images/logos/linkedin_logo.svg';
import pdf from '../Images/logos/pdf_logo.svg';

function About() {
  return (
    <section className="about-section">
      <div className="about-me-text">
        <div className="contact-info">
          <h1 id="about">Jean Vitor Pacheco</h1>
          <h2>Front-end web developer</h2>
          <h2>jeanvitorp@gmail.com</h2>
        </div>
        <div className="about-text">
          <div className="about-title">
            <h1>About me</h1>
            <div className="about-bar" />
          </div>
          <p>
            I have had a lot of diverse opportunities as an intern: a law firm, UFSC&apos;s office,
            Municipal Court of Palhoça and a bank (BRDE). Through these I could work could work in
            the public and private sector, and different law contexts as well.
          </p>
          <p>
            While working at my day to day activities, I realized that I could automate a lot of
            what was doing, and it sparked an instering in learning basic concepts of programming.
            Nowadays I am an aspiring full-stack web developer, studying at Trybe.
          </p>
          <div className="about-buttons">
            <a href="https://www.linkedin.com/in/jeanvpacheco/" target="_blank" rel="noreferrer">
              <button className="btn">
                <div className="about-button-content">
                  <img src={linkedin} className="about-logo" alt="linkedin logo" />
                  <h2>LinkedIn</h2>
                </div>
              </button>
            </a>
            <button className="btn">
              <a href="https://github.com/JeanVPacheco" target="_blank" rel="noreferrer">
                <img src={github} className="about-logo" alt="github logo" />
                <h2>Github</h2>
              </a>
            </button>
            <button className="btn">
              <img src={pdf} className="about-logo" alt="pdf logo" />
              <h2>Resume</h2>
            </button>
          </div>
        </div>
      </div>
      <img src={profile} alt="profile-picture" className="about-profile-picture" />
    </section>
  );
}

export default About;
