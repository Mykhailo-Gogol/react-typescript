import React, { useState } from "react";

const TypedEvents = () => {
  const [input, setInput] = useState<string>("");
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLHeadingElement>
  ) => {
    alert(`${event.clientX}, ${event.clientY}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (input) {
      alert(`${input} submitted `);
      setInput("");
    } else {
      alert("Input is empty");
    }
  };

  const handleCopy = (event: React.ClipboardEvent<HTMLInputElement>) => {
    alert(`'${input}' copied `);
  };

  return (
    <section>
      <button onClick={handleClick}>Click to see coordinates</button>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="text"
            placeholder="Type"
            onFocus={handleFocus}
            onChange={handleChange}
            value={input}
            onCopy={handleCopy}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default TypedEvents;
