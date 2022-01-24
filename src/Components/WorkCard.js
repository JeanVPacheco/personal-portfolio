import PropTypes from 'prop-types';

function WorkCard({ project }) {
  return (
    <div className="work-card">
      <img src={project.image} alt={`${project.name} application screenshot`} />
      <div className="work-card-info">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <button className="btn">
          <a href={project.link} target="_blank" rel="noreferrer">
            <h3>View live page</h3>
          </a>
        </button>
      </div>
    </div>
  );
}

WorkCard.propTypes = {
  project: PropTypes.object.isRequired
};

export default WorkCard;
