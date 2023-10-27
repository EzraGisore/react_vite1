import { useEffect, useState } from "react";

export default function Fruits() {
  const [fruits, setFruits] = useState();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/fruits")
      .then((response) => response.json())
      .then((data) => {
        setFruits(data.fruits);
      });
  }, []);
  return (
    <>
      <p>Fruits</p>
      {fruits
        ? fruits.map((fruit) => {
            return (
              <>
                <p> {fruit.type}</p>
                <p>{fruit.quantinty}</p>
              </>
            );
          })
        : null}
    </>
  );
}
