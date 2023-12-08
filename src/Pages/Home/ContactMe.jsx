export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h1 className="skills-section--heading">Contact Me</h1>
        <br />
        <p className="text-lg">
          I'm currently available to get involved in new projects, so get in
          touch if you'd like to work together.
        </p>
        <br />
        <p
          style={{
            marginTop: 1,
            color: "#1c1e53",
            fontSize: "20px",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "27px",
          }}
        >
          Email me at{" "}
          <a
            href="mailto:ayushprajapati2563@gmail.com"
            style={{ color: "red" }}
          >
            ayushprajapati2563@gmail.com
          </a>{" "}
          and let's talk about your project!
        </p>
      </div>
    </section>
  );
}
