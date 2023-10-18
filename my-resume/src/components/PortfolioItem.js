function PortfolioItem(props) {
  return (
    <section>
      <div><img src={props.image} alt={props.filename} ></img></div>
      <div>
        <h1> {props.filename} </h1>
        <h3> {props.details} </h3>
      </div>
      <div>
        <button> Take me to Repo </button>
      </div>
    </section>
  );
}

export default PortfolioItem;
