import React from "react";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

interface TableProps {
  response: Person;
}

export const Table = ({ response }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Imię</th>
          <th>{response.firstName}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nazwisko</td>
          <td>{response.lastName}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Wiek</td>
          <td>{response.age}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
