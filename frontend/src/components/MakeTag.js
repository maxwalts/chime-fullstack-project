import React, { useState } from "react";
import { Form, Label, Button } from "semantic-ui-react";

const MakeTag = ({ onNewTag }) => {
  const [tagname, setTagName] = useState("");
  return (
    <Form>
      <Form.Field required>
        <Label>Tag Name</Label>
        <Form.Input
          placeholder="a category, like fruit"
          value={tagname}
          onChange={(e) => setTagName(e.target.value)}
        />
      </Form.Field>
      <Button
        onClick={async () => {
          const tagItem = { tagname };
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
            setTagName("");
          }
        }}
        type="submit"
      >
        Create Tag
      </Button>
    </Form>
  );
};

export default MakeTag;
