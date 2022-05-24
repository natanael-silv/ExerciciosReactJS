import "./index.css";

const List = ({ list }) => {
  return (
    <section className="listGroup">
      <ul className="listGroup__ul">
        {list.map((element) => (
          <li className="listGroup__li">{element}</li>
        ))}
      </ul>
    </section>
  );
};

export default List;
