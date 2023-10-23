import Explained from "../components/Explained";
import Nav from "../layout/Nav";
import AboutResCard from "../style/AboutResCard";

function HomePage() {
  return (
    <div>
      <Nav />
      <AboutResCard>
        <Explained />
      </AboutResCard>
    </div>
  );
}

export default HomePage;
