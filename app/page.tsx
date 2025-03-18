import About from "./About/page";
import Contact from "./Contact/page";
import Footer from "./Footer/page";
import Main from "./Main/page";
import Project from "./Project/page";
import Skills from "./Skills/page";

export default function Home() {
  return (
    <div>
      <Main/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
