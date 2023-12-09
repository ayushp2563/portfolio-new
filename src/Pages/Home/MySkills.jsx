import data from "../../data/index.json";
export default function MySkills() {
  return (
    <section
      className="
        skills--section"
      id="myskills"
    >
      <div className="portfolio--container">
        <h1 className="skills--section--heading">Skills</h1>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title"> {item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
