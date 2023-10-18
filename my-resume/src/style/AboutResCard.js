import styleClass from "./AboutResCard.module.css";

function AboutResCard(props) {
    return (
        <div className={styleClass.card}> {props.children} </div>
    )
}

export default AboutResCard;