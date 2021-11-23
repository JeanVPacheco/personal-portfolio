function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-title">
        <h1 id="skills">Skills</h1>
        <hr />
      </div>
      <h2 className="skill-block-title">Front End Development</h2>
      <ul className="skill-list">
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>React-Testing-Library</li>
        <li>Redux</li>
      </ul>
      <h2 className="skill-block-title">Back End Development</h2>
      <ul className="skill-list">
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>NodeJS</li>
      </ul>
      <h2 className="skill-block-title">Other Skills</h2>
      <ul className="skill-list">
        <li>GIT</li>
        <li>Docker</li>
      </ul>
    </section>
  );
}

export default Skills;
