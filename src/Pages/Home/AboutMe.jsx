import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  AOS.init();
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img" data-aos="fade-right">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content" data-aos="fade-left">
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a budding web developer with a passion for creating beautiful
            and functional websites. I have completed courses in React JS and
            have built a number of personal projects to gain experience in web
            development. With a keen eye for design and a commitment to
            delivering high-quality work, I am excited to take on new challenges
            and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
