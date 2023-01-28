import { useState } from "react";
import CountDisplay from "./components/CountDisplay/CountDisplay";
import Heading from "./components/Heading/Heading";
import Manipulator from "./components/Manipulator/Manipulator";
import DisplayRandom from "./components/DisplayRandom/DisplayRandom";
// import Form from "./components/Form/Form";
// import Table from "./components/Table/Table";
// import Display from "./components/Display/Display";
// import TodoDisplay from "./components/TodoDisplay/TodoDisplay";

function App() {
  // Hook - funkcja wbudowana (najczęściej) w react lub pochodząca od osób trzecich, ma ona dostęp do wewnętrznych mechanizmów działania reacta

  // ZASADY HOOKÓW
  // 1. Hooki mogą być używane tylko w komponentach funkcyjnych.
  // 2. Hooki mogą być wywoływane tylko na top scopie w komponentach funkcyjnych.
  // 3. Nazwy hooków zaczynają się na "use" (np. useState, useRef, useEffect, useForm itd.)

  // useState - hook służący do przechowywania wartości, których zmiana ma spowodować przeładowanie się komponentu
  // stan pusty => request => response => response do stanu => przeładowanie komponentu => wyświetlenie response
  // useState zwraca listę z 2 elementami: zmienną stanową (stan) i funkcję aktualizującą zmienną stanową (stan)
  // zmienną stanową możesz nazwać jak chcesz, w nazewnictwie funkcji aktualizującej zmienną stanową istnieje konwencja: set + nazwa zmiennej stanowej

  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  // count = 5 ZLE
  // count++ ZLE
  // setCount(5) DOBRZE

  // let count = 10;
  console.log("przeladowane");
  const incraseCount = () => {
    setCount(count + 1);
    // count++ // to jest operacja, nie wartość, funkcja aktulizująca potrzebuje wartości
    console.log(count);
  };

  // 1. Zdefiniowanie stanu
  // 2. Przekazanie funkcji aktulizującej stan do komponentu niżej
  // 3. Wywołanie tam tej funkcji
  // 4. Zmienna stanowa w komponencie wyższym się aktulizuje
  // 5. Przeładowanie komponentu
  // 6. Wyświetlenie nowej wartości

  return (
    <div className="App">
      <Heading />
      <CountDisplay count={count} />
      <button onClick={incraseCount}>Add+1</button>
      <Manipulator count={count} setCount={setCount} />
      <DisplayRandom
        setRandomNumber={setRandomNumber}
        randomNumber={randomNumber}
      />

      {/* <p>{randomNumber}</p> */}
      {/* <div>
        <h5>{count}</h5>
      </div> */}
      {/* <Form />
      <Table response={response} />
      <Display response={response} />
      <TodoDisplay todo={todo} /> */}
    </div>
  );
}

export default App;

// const props = {
//   dataToPassDown: response,
// };

// PRZEKAZYWANIE DANYCH Z KOMPONENTU RODZICA DO KOMPONENTU DZIECKA - PROPS
// 1. Wpisanie propsa w tag komponentu (wyświetlnie).
// 2. Stworzenie odpowiedniego interfejsu w komponencie który odbiera dane. Pamiętaj że nawet jeżeli przekazujesz tylko 1 prop, jest on obwijany obiektem.
// 3. Odebranie propsów przez parametr w komponencie dziecku. Od razu destrukturyzuj parametr.
// 4. Korzystaj z danych.

// 1. Przekaż obiekt response do komponentu Table.tsx propsem. Nie zapomnij o odebraniu propsów, destrukturyzacji i intefejsie
// 2. Wyświetl dane w tabeli (po lewej w tabeli imie nazwisko wiek, po prawej dane)

// const response = {
//   firstName: "John",
//   lastName: "Smith",
//   age: 30,
// };

// const todo = {
//   userId: 1,
//   id: 1,
//   title: "delectus aut autem",
//   completed: false,
// };

// 1. Stwórz komponent DisplayRandom.
// 2. W komponencie DisplayRandom stwórz stan randomNumber, wartość początkowa: 0
// 3. Stwórz funkcję updateRandomNumber, w tej funkcji przy użyciu innej odpowiedniej funkcji aktulizuj stan randomNumber na losową liczbę.
// 4. Stan randomNumber wyświetlaj w paragrafie w komponencie DisplayRandom.
// 5. Stwórz przycisk z textem Update, na ten przycisk nadaj onClick, do onClicka podaj funkcję updateRandomNumber.
// 6. Sam komponent DisplayRandom wyświetl w App.tsx
