import React, { useState } from "react";
import { Container, Segment, Header, Label } from "semantic-ui-react";

const Menu = ({ items }) => {
  return (
    <Segment.Group stacked>
      <Header
        style={{
          backgroundColor: "#179a5c",
          color: "#F5F5F5",
          textAlign: "center",
        }}
        as="h2"
        attached="top"
      >
        Your Menu
      </Header>
      {items.map((item) => {
        return (
          <Segment padded="very" style={{ backgroundColor: "#1ec677" }}>
            <Header style={{ color: "#F5F5F5" }} as="h2">
              {item.name}
              <Label
                style={
                  item.tag
                    ? { color: "#c61e6d" }
                    : { backgroundColor: "#1ec677" }
                }
              >
                {item.tag}
              </Label>
            </Header>
          </Segment>
        );
      })}
    </Segment.Group>
  );
};

export default Menu;
