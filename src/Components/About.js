import profile from '../Images/profile-picture.png';
import github from '../Images/logos/github_logo.svg';
import linkedin from '../Images/logos/linkedin_logo.svg';
import pdf from '../Images/logos/pdf_logo.svg';

function About() {
  return (
    <section className="about-section">
      <div className="about-div">
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
              I&apos;m passionate about learning new stuff, someone that&apos;s curious by nature.
              After finishing my law degree with some experience as an intern, I felt that my path
              was not compatible with my ambitions. I realized that a lot of my day to day
              activities could, and should, be automatized. Because of that an interest in the IT
              area grew in me, so I started to study web development and fell in love.
            </p>
            <p>
              The dynamicity, ongoing evolution and social value that a software might provide, had
              me diving headfirst into this world. I hope to be able to make a difference with my
              unique experience and perspective!
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
              <a href="https://github.com/JeanVPacheco" target="_blank" rel="noreferrer">
                <button className="btn">
                  <div className="about-button-content">
                    <img src={github} className="about-logo" alt="github logo" />
                    <h2>Github</h2>
                  </div>
                </button>
              </a>
              <a href="https://github.com/JeanVPacheco" target="_blank" rel="noreferrer">
                <button className="btn">
                  <div className="about-button-content">
                    <img src={pdf} className="about-logo" alt="pdf logo" />
                    <h2>Resume</h2>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <img src={profile} alt="profile-picture" className="about-profile-picture" />
      </div>
    </section>
  );
}

export default About;
