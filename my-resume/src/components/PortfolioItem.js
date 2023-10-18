import Card from "../card/Card";
import styleClass from "../card/Card.module.css";

function PortfolioItem(props) {
  return (
    <div>
      <Card>
        <div>
          <img src={props.image} alt={props.filename}></img>
        </div>
        <div>
          <h1> {props.filename} </h1>
          <h3> {props.details} </h3>
        </div>
        <div className={styleClass.actions}>
          <button> Take me to Repo </button>
        </div>
      </Card>
    </div>
  );
}

export default PortfolioItem;
