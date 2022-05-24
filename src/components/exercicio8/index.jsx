import Card from "./Card";

function Exercicio8() {
  const jokes = [
    {
      id: 1,
      setup: "what's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];
  return (
    
      <Card array={jokes} />
    
  );
}

export default Exercicio8;
