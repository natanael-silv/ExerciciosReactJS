import { useState } from "react";
import "./index.css";

function Exercicio4() {
  const [count, setCount] = useState(0);

  const addNumner = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <section className="counter">
      <p className="counter__text">Button has been clicked: {count}</p>
      <button onClick={addNumner} className="counter_btn">
        Click Me
      </button>
    </section>
  );
}
export default Exercicio4;
