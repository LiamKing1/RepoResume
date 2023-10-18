import styleClass from "./Card.module.css";

function Card(props) {
    return (
        <div className={styleClass.card}> {props.children} </div>
    )
 }

 export default Card;