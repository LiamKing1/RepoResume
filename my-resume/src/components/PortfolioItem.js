import Card from "../style/Card";
import styleClass from "../style/Card.module.css";
// import Beltloader from "./BeltLoader.jpg";
// import Modal from "./Modal";

function PortfolioItem(props) {
  return (
    <div>
      <Card>
        <div className={styleClass.columm}>
          <img className={styleClass.img} src={props.image} alt={props.filename}></img>
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
