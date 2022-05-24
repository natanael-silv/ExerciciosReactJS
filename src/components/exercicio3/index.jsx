import Button from "./Button";
import "./index.css"

function Exercicio3() {
  return (
    <div className="btnGroup">
      <Button className="btnGroup__btn" text="Button1" number="1" />
      <Button className="btnGroup__btn" text="Button2" number="2" />
      <Button className="btnGroup__btn" text="Button3" number="3" />
    </div>
  );
}

export default Exercicio3;
