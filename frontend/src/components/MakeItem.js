import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Label,
  Segment,
  Divider,
} from "semantic-ui-react";

const MakeItem = ({ onNewItem, tags }) => {
  const [name, setItemName] = useState(null);
  const [tag, setTag] = useState(null);

  return (
    <Segment
      compact
      padded
      style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
    >
      <Form>
        <Form.Field required>
          <Label style={{ backgroundColor: "#1ec677", color: "white" }}>
            Menu Item Name
          </Label>
          <Form.Input
            placeholder="a food, like apple"
            value={name}
            onChange={(e) => setItemName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Label style={{ backgroundColor: "#c61e6d", color: "white" }}>
            Tag
          </Label>
          <Form.Dropdown
            selection
            //conditionally render if tags do not load
            options={
              tags
                ? tags.map((tag) => {
                    return {
                      key: tag.id,
                      text: tag.tagname,
                      value: tag.tagname,
                    };
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
        <Divider hidden />
        <Button
          secondary
          onClick={async () => {
            const menuItem = { name, tag };
            if (name !== "" && name !== null) {
              const response = await fetch(
                "http://localhost:5000/post/menuitems",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(menuItem),
                }
              );

              if (response.ok) {
                console.log("created post");
                onNewItem(menuItem);
                setItemName(null);
                setTag(null);
              }
            }
          }}
          type="submit"
        >
          Create Menu Item
        </Button>
      </Form>
    </Segment>
  );
};

export default MakeItem;
