import "./index.css"

const Card = ({ array }) => {
  return (
    <div className="card">
      {array.map((element) => 
        <div className="card__item">
          <h2>{element.setup}</h2>
          <p>{element.punchline}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
