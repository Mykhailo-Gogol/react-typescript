import React, { useState } from "react";

type TCounterProps = {
  readonly title: string;
};

const Counter = ({ title }: TCounterProps) => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleIncrement = (): void => {
    setCount((prevState) => ++prevState);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 50);
  };
  return (
    <section>
      <h1 style={loading ? { color: "#4040d4" } : { color: "white" }}>
        {count}
      </h1>
      <button onClick={handleIncrement}>{`Increment ${title}`}</button>
    </section>
  );
};

export default Counter;
