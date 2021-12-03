import PropTypes from 'prop-types';

function WorkCard({ project }) {
  return (
    <div className="work-card">
      <div className="work-image-div">
        <img src={project.image} alt={`${project.name} application screenshot`} />
      </div>
      <div className="work-card-info">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <button className="btn">
          <a href={project.link} target="_blank" rel="noreferrer">
            <h2>View live page</h2>
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
