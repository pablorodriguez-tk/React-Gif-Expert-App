import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GifExpertApp from "./GifExpertApp";

ReactDOM.render(
  <GifExpertApp defaultCategories={["One Punch"]} />,
  document.getElementById("root")
);
