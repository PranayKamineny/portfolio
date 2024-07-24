import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Socials from "../../components/Socials"
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="px-32 sm:px-5 overflow-x-hidden">
        <Header page="intro"/>
        <Intro/>
        <Socials/>
        <Footer/>
    </div>
  );
}

export default Home;
