import React, { useState } from "react";
import { Form, Input, Button, Label } from "semantic-ui-react";

const MakeItem = ({ onNewItem, tags }) => {
  const [name, setItemName] = useState("");
  const [tag, setTag] = useState("");

  return (
    <Form>
      <Form.Field required>
        <Label>Menu Item Name</Label>
        <Form.Input
          placeholder="a food, like apple"
          value={name}
          onChange={(e) => setItemName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Label>Tag Name</Label>
        <Form.Dropdown
          selection
          //conditionally render if tags do not load
          options={
            tags
              ? tags.map((tag) => {
                  return { key: tag.id, text: tag.tagname, value: tag.tagname };
                })
              : { key: 1, text: "Loading...", value: 1 }
          }
          placeholder="a category, like fruit. You can only add a tag that already exists."
          value={tag}
          onChange={(_, data) => setTag(data.value)}
        />
        {/* <Form.Input
          placeholder="a category, like fruit. You can only add a tag that already exists"
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
        /> */}
      </Form.Field>
      <Button
        onClick={async () => {
          const menuItem = { name, tag };
          const response = await fetch("http://localhost:5000/post/menuitems", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(menuItem),
          });

          if (response.ok) {
            console.log("created post");
            onNewItem(menuItem);
            setItemName("");
            setTag("");
          }
        }}
        type="submit"
      >
        Create Menu Item
      </Button>
    </Form>
  );
};

export default MakeItem;
