import useState from "React";

function Exercicio5() {
  const animals = ["dog", "cat", "chicken", "cow", "horse"];
  
  return (
    <ul>
      {animals.map((element) => (
        <li>{element}</li>
      ))}
    </ul>
  );
}

export default Exercicio5;
