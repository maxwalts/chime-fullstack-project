import React, { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import { Container } from "semantic-ui-react";

function App() {
  const [menuitems, setMenuitems] = useState([]);
  useEffect(() => {
    //get menuitems
    fetch("http://localhost:5000/get/menuitems").then((response) =>
      response.json().then((data) => {
        setMenuitems(data.menuitems);
      })
    );
  }, []);
  console.log(menuitems);

  // to see possible created tags
  const [tags, setTags] = useState([]);
  useEffect(() => {
    //get tags
    fetch("http://localhost:5000/get/tags").then((response) =>
      response.json().then((data) => {
        setTags(data.tags);
      })
    );
  }, []);
  console.log(tags);

  return (
    <Container>
      <Menu items={menuitems} />
    </Container>
  );
}

export default App;
