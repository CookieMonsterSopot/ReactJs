import React, { useState } from 'react';

const DisplayRandom = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  function updateRandomNumber() {
    setRandomNumber(Math.floor(Math.random() * 100));
  }

  return (
    <div>
      <p>{randomNumber}</p>
      <button onClick={updateRandomNumber}>Update</button>
    </div>
  );
}

export default DisplayRandom;


// 1. Stwórz komponent DisplayRandom.
// 2. W komponencie DisplayRandom stwórz stan randomNumber, wartość początkowa: 0
// 3. Stwórz funkcję updateRandomNumber, w tej funkcji przy użyciu innej odpowiedniej funkcji aktulizuj stan randomNumber na losową liczbę.
// 4. Stan randomNumber wyświetlaj w paragrafie w komponencie DisplayRandom.
// 5. Stwórz przycisk z textem Update, na ten przycisk nadaj onClick, do onClicka podaj funkcję updateRandomNumber.
// 6. Sam komponent DisplayRandom wyświetl w App.tsx
