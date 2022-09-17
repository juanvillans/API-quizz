import React from "react";
import LiBox from "./LiBox";



let boxHolded;
  let mainNumber;

export default function Game() {
  const [numbers, setNumbers] = React.useState(getRandomN());

  function getRandomN() {
    const arrN = [];
    for (let i = 0; i < 10; i++) {
      arrN.push({number: Math.trunc(Math.random() * 6) + 1, hold: false});
    }
    return arrN;
  }

  const boxes = numbers.map((n, i) => (
    <LiBox hold={n.hold} id={i} key={i} selectBox={selectBox} value={n.number} />
  ));

  const [tenzies, setTenzies] = React.useState(false)
    
  React.useEffect(() => {
      const result = numbers.every(die => (die.hold === true) && (die.number === numbers[0].number))
      result? setTenzies(true) : setTenzies(false)
  }, [numbers])

  function selectBox(event, id) {
    setNumbers(prev => prev.map( (box, i) =>  (id == i ? {...box, hold: !box.hold} : box))) 
  }

  function Roll() {
    setNumbers((prev) => {
    return  prev.map((n,i) => {
       return (n.hold? n : {...n, number: Math.trunc(Math.random() * 6) + 1})
      });
    });
  }
  function resetGame() {
    setNumbers(getRandomN())
  }

  return (
    <div className="text-center flex flex-col justify-between rounded-xl p-12 items-center bg-gray-200 h-3/4 w-3/4">
      <header>
        <h1 className="bg text-4xl font-semibold ">Tenzies</h1>
        <p className="mt-2 leading-5">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </header>
      <ul className="grid gap-5 text-neutral-700 grid-rows-2 text-2xl font-bold grid-cols-5">
        {boxes}
      </ul>
      
        {tenzies 
        ? <button onClick={resetGame} className="py-2 px-10  bg-morado rounded-md text-white text-2xl">Reset Game</button>
        : <button onClick={Roll} className="py-2 px-10  bg-morado rounded-md text-white text-2xl">Roll</button>
        }
    </div>
  );
}
