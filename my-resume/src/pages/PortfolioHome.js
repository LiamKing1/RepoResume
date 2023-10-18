import PortfolioList from "../components/PortfolioList";

const DUMMY_DATA = [
  {
    id: 1,
    image:
      "https://drive.google.com/file/d/1arGdC_ThUlzKfSNZvm35-d8VQBWxkHh1/view?usp=share_link",
    filename: "Animation App",
    details:
      "This project was created in so i could practice building out really animated apps that catch the attention of people all around that world",
  },
  {
    id: 2,
    image:
      "https://drive.google.com/file/d/1Fp_N9x1QeTpJPxbeXoh7y9zus8Ks-dLw/view?usp=share_link",
    filename: "Silly App",
    details: "I just wanted to give people something to laugh about",
  },
  {
    id: 3,
    image:
      "https://drive.google.com/file/d/1TUtMyq1B6pV8vtS0wIoTrxvzyLxvhDAh/view?usp=share_link",
    filename: "Survey App",
    details:
      "For gathering information for planning a family reunion on a cruise ship",
  },
];

function PortfolioHome() {
  return (
    <section>
      <h1> Portfolio </h1>
      <PortfolioList folio={DUMMY_DATA} />
    </section>
  );
}

export default PortfolioHome;