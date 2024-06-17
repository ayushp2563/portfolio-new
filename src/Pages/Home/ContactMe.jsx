export default function ContactMe() {
  return (
    <section
      id="Contact"
      className="py-60 md:py-36 px-4 md:px-28"
      data-aos="fade-right"
    >
      <div
        className="text-start
      "
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
          Contact Me
        </h1>
        <br />
        <p className="text-lg md:text-xl dark:text-white text-black mb-6">
          I'm currently available to get involved in new projects, so get in
          touch if you'd like to work together.
        </p>
        <br />
        <p className="text-lg md:text-xl  dark:text-white text-black">
          Email me at{" "}
          <a
            href="mailto:ayushprajapati2563@gmail.com"
            className="text-red-500 text-primary transition-colors duration-300 underline"
          >
            ayushprajapati2563@gmail.com
          </a>{" "}
          and let's talk about your project!
        </p>
      </div>
    </section>
  );
}
