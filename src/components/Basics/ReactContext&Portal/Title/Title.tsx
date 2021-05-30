import React from "react";

type TTitleProps = {
  title: string;
  test?: string;
};

// const Title: React.FC<TTitleProps> = ({ title, children }) => <h1>{title}</h1>;

const Title: React.FC<TTitleProps> = ({ title, test = " Test" }) => (
  <h1>{` ${title}, ${test}`}</h1>
);

export default Title;
