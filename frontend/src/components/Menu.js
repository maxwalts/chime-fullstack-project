import React, { useState } from "react";
import { Container } from "semantic-ui-react";

const Menu = ({ items }) => {
  return (
    <Container>
      {items.map((item) => {
        return <p>{item.name}</p>;
      })}
    </Container>
  );
};

export default Menu;
