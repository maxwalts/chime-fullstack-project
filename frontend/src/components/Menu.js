import React, { useState } from "react";
import { Container } from "semantic-ui-react";

const Menu = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <p>
            {item.name}
            {item.tag}
          </p>
        );
      })}
    </div>
  );
};

export default Menu;
