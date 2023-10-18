import PortfolioItem from "./PortfolioItem";

function PortfolioList(props) {
  return (
    <ul>
      {props.folio.map((data) => {
        return (
          <PortfolioItem
            key={data.id}
            id={data.id}
            image={data.image}
            filename={data.filename}
            details={data.details}
          />
        );
      })}
    </ul>
  );
}

export default PortfolioList;
