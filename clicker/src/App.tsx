import React from "react";
import CountDisplay from "./components/CountDisplay/CountDisplay";
import Heading from "./components/Heading/Heading";
import Manipulator from "./components/Manipulator/Manipulator";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import Display from "./components/Display/Display";
import TodoDisplay from "./components/TodoDisplay/TodoDisplay";

function App() {
  const response = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  return (
    <div className="App">
      <Heading />
      <CountDisplay />
      <Manipulator />
      <Form />
      <Table />
      <Display response={response} />
      <TodoDisplay todo={todo} />
    </div>
  );
}

export default App;

// 1. Stwórz komponent Heading, w komponencie wyświetlaj h1 z tekstem ZDFRONpol17 Clicker/React. Wyświetl Heading w App.tsx
// 2. Stwórz komponent CountDisplay, w komponencie wyświetlaj diva, w divie spana z tesktem "0". Wyświetl CountDisplay w App.tsx
// 3. Stwórz komponent Manipulator, w komponencie wyświetlaj diva, w divie h2 z textem: "Zwiększ lub zmniejsz", obok 2 buttony, jeden z tekstem "+", jeden z tekstem "-". Wyświetl Manipulator w App.tsx

// 1. Stwórz komponent Form. W komponencie wyświetlaj tag form, nadaj mu id contact-form. W środku input tekstowy z placeholderem "first name", input tekstowy z placeholderem "last name", input tekstowy z placeholderem "zip code and city", input tekstowy z placeholderem "address", dodaj do tego button type submit z tekstem Send.
// 2. Stwórz komponent Table. W nim wyświetlaj tabele. Ma mieć 3 wiersze, jeden nagłówkowy, jeden normalny, jeden stopkowy. Ma mieć też 2 kolumny. Wpisz w tabele dowolne dane.
