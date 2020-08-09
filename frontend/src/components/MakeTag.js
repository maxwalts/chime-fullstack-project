import React, { useState } from "react";
import { Form, Label, Button, Segment, Divider } from "semantic-ui-react";

const MakeTag = ({ onNewTag }) => {
  const [tagname, setTagName] = useState(null);
  return (
    <Segment
      compact
      padded
      style={{ width: "33%", marginLeft: "auto", marginRight: "auto" }}
    >
      <Form>
        <Form.Field required>
          <Label style={{ backgroundColor: "#c61e6d", color: "white" }}>
            Tag Name
          </Label>
          <Form.Input
            placeholder="a category, like fruit"
            value={tagname}
            onChange={(e) => setTagName(e.target.value)}
          />
        </Form.Field>
        <Divider hidden />
        <Button
          secondary
          onClick={async () => {
            const tagItem = { tagname };
            if (tagname !== "" && tagname !== null) {
              const response = await fetch("http://localhost:5000/post/tags", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(tagItem),
              });

              if (response.ok) {
                console.log("created post (tag)");
                onNewTag(tagItem);
                setTagName(null);
              }
            }
          }}
          type="submit"
        >
          Create Tag
        </Button>
      </Form>
    </Segment>
  );
};

export default MakeTag;
