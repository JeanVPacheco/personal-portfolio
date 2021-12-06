import PropTypes from 'prop-types';

function SkillCard({ skill }) {
  let styles;
  switch (skill.level) {
    case 'Intermediate':
      styles = {
        borderLeft: '5px solid rgb(70, 116, 27)'
      };
      break;
    case 'Beginner':
      styles = {
        borderLeft: '5px solid rgb(119, 74, 23)'
      };
      break;
    default:
      break;
  }
  return (
    <li className="skill-card" style={styles}>
      <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
      <div className="skill-card-info">
        <h2>{skill.name}</h2>
        <hr />
        <p>{skill.level}</p>
      </div>
    </li>
  );
}

SkillCard.propTypes = {
  skill: PropTypes.object.isRequired
};

export default SkillCard;
