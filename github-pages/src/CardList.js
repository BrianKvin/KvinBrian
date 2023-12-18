import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";


function CardList({ testData }) {
  return (
    <div className="container">
      {testData.map((profile, index) => <Card key={index} profile={profile}/>)}
    </div>
  );
}

export default CardList;
