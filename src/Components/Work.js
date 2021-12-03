import workData from '../Data/WorkData';
import WorkCard from './WorkCard';

function Work() {
  return (
    <section className="work-section" id="work">
      <div className="work-area">
        <h1 id="work">Work</h1>
        <hr />
        {workData.map((project) => (
          <WorkCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}

export default Work;
