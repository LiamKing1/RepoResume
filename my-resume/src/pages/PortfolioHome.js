import PortfolioList from "../components/PortfolioList";
import Nav from "../layout/Nav";
import Beltloader from "../components/BeltLoader.jpg";
import AntiqueBeach from "../components/AntiqueBeach.jpg";
import MotoSpain from "../components/MotoSpain.jpg";

const DUMMY_DATA = [
  {
    id: 1,
    image: Beltloader,
    filename: "Skill Builder",
    details:
      "This project was created in so i could practice building out really animated apps that catch the attention of people all around that world",
  },
  {
    id: 2,
    image: AntiqueBeach,
    filename: "Silly App",
    details: "I just wanted to give people something to laugh about",
  },
  {
    id: 3,
    image: MotoSpain,
    filename: "Survey App",
    details:
      "For gathering information for planning a family reunion on a cruise ship",
  },
];

function PortfolioHome() {
  return (
    <div>
      <Nav />
      <h1> Portfolio </h1>
      <section>
        <PortfolioList folio={DUMMY_DATA} />
      </section>
    </div>
  );
}

export default PortfolioHome;
