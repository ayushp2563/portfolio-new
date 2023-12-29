import { Link } from "react-router-dom";
import data from "../../data/index.json";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyPortfolio() {
  AOS.init();
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="skills--section--heading">Projects</h1>
        </div>
        <div>
          <a
            href="https://github.com/ayushp2563"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className="btn btn-github">
              <svg
                height={50}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="github"
              >
                <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
              </svg>
              Visit My GitHub
            </button>
          </a>
        </div>
      </div>
      <div
        className="portfolio--section--container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                <button className="btn btn-outline-primary">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "ffb703" }}
                  >
                    Visit Link
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
