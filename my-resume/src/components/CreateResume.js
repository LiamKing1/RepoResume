import styleClass from "./CreateResumeStyle.css";

const DUMMY__DATA = [
  {
    id: 0,
    filename: "Animation App",
    image: "https://drive.google.com/file/d/1guLoROVN8KUaUZJMF1J53xWv2lAp75YH/view?usp=share_link",
    details:
      "This project was created in so i could practice building out really animated apps that catch the attention of people all around that world",
    destination: "https://github.com/LiamKing1",
  },
  {
    id: 1,
    filename: "Silly App",
    image: "https://drive.google.com/file/d/1TFH9-bOFKj4NuSkppewEqq3BHv-c8mQV/view?usp=share_link",
    details: "I just wanted to give people something to laugh about",
    destination: "https://github.com/LiamKing1",
  },
  {
    id: 2,
    filename: "Survey App",
    image: "https://drive.google.com/file/d/1TUtMyq1B6pV8vtS0wIoTrxvzyLxvhDAh/view?usp=share_link",
    details:
      "For gathering information for planning a family reunion on a cruise ship",
    destination: "https://github.com/LiamKing1",
  },
];

function handleToResume() {
  console.log("take me to this resume!");
}

function CreateResume() {
  return (
    <div className={styleClass}>
      {DUMMY__DATA.map((data) => (
        <ul key={data.id}>
          <li>
            {/* <img src={data.image} alt="Creative images"> Image </img> */}
            <p> {data.filename} </p>
            <p> {data.details} </p>
            <p> {data.destination} </p>
          </li>
          <button onClick={handleToResume}> View Resume </button>
        </ul>
      ))}
    </div>
  );
}

export default CreateResume;
