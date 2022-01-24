import { feSkills, beSkills, otherSkills } from '../Data/SkillsData';
import SkillCard from './SkillCard';

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-div">
        <div className="skills-area">
          <h1 id="skills">Skills</h1>
          <div className="skills-bar " />
          <h2 className="skill-block-title">Front End Development</h2>
          <ul className="skill-list">
            {feSkills.map((skill) => (
              <SkillCard skill={skill} key={skill.name} />
            ))}
          </ul>
          <h2 className="skill-block-title">Back End Development</h2>
          <ul className="skill-list">
            {beSkills.map((skill) => (
              <SkillCard skill={skill} key={skill.name} />
            ))}
          </ul>
          <h2 className="skill-block-title">Other Skills</h2>
          <ul className="skill-list">
            {otherSkills.map((skill) => (
              <SkillCard skill={skill} key={skill.name} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
