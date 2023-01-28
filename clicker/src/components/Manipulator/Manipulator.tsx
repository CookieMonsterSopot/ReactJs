import React from "react";

interface ManipulatorProps {
  setCount: (value: number) => void;
  count: number;
}

const Manipulator = ({ setCount, count }: ManipulatorProps) => {
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <div>
      <div>
        <h5>{count}</h5>
      </div>
      <h2>Zwiększ lub zmniejsz</h2>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};

export default Manipulator;

// 1. Przekazanie stanu count i funkcji aktulizującej stan count do Manipulator.tsx
// 2. W Manipulatorze stwórz 2 funkcje: incrementCount i decrementCount. W incrementCount wywołuj setCount w taki sposób żeby stan count zwiększał się o jeden (NIE COUNT++), korzystaj ze stanu count który również jest dostępny w tym komponencie. W decrementCount rób odwrotność, zmniejszaj stan count o 1.
// 3. W Manipulatorze na przycisk "+" nałóż onClick, do onClicka podaj incrementCount, do onClicka na przycisku "-" podaj decrementCount.
// 4. Z App.tsx do CountDisplay przekaż stan count. Wyświetlaj go w spanie w którym teraz mamy wyświetlone 0.
