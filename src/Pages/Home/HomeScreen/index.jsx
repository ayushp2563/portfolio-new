import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import MyPortfolio from "../My Portfolio";
import MySkills from "../MySkills";

export default function Home() {
  return (
    <>
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
