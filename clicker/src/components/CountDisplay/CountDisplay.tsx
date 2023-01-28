import React from "react";
interface CountDisplayProps {
  count: number;
}

const CountDisplay = ({ count }: CountDisplayProps) => {
  return (
    <div>
      <span>{count}</span>
    </div>
  );
};

export default CountDisplay;
