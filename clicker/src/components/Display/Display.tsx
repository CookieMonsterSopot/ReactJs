import React from "react";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

interface DisplayProps {
  response: Person;
}

const Display = (props: DisplayProps) => {
  return (
    <div>
      <p>{props.response.firstName}</p>
      <p>To jest Display</p>
    </div>
  );
};

export default Display;
