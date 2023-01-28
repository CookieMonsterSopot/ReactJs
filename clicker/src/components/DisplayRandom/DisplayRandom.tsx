import React from "react";

interface DisplayRandomProps {
  setRandomNumber: (value: number) => void;
}

const DisplayRandom = ({ setRandomNumber }: DisplayRandomProps) => {
  const updateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100);
    setRandomNumber(random);
  };

  return (
    <div>
      <button onClick={updateRandomNumber}>Update</button>
    </div>
  );
};

export default DisplayRandom;

// 1. Stwórz komponent DisplayRandom.
// 2. W komponencie DisplayRandom stwórz stan randomNumber, wartość początkowa: 0
// 3. Stwórz funkcję updateRandomNumber, w tej funkcji przy użyciu innej odpowiedniej funkcji aktulizuj stan randomNumber na losową liczbę.
// 4. Stan randomNumber wyświetlaj w paragrafie w komponencie DisplayRandom.
// 5. Stwórz przycisk z textem Update, na ten przycisk nadaj onClick, do onClicka podaj funkcję updateRandomNumber.
// 6. Sam komponent DisplayRandom wyświetl w App.tsx
