import React, { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    //get menuitems
    fetch("http://localhost:5000/get/menuitems").then((response) =>
      response.json().then((data) => {
        setItems(data.items);
      })
    );
  }, []);
  console.log(items);
  // TODO: to see possible created tags, I should make a new route just for tags.
  // const [tags, setTags] = useState([]);
  // useEffect(() => {
  //   //get tags
  //   fetch("http://localhost:5000/get/tags").then((response) =>
  //     response.json().then((data) => {
  //       setItems(data.items);
  //     })
  //   );
  // }, []);

  return (
    <div className="App">
      <h1>testing</h1>
    </div>
  );
}

export default App;
