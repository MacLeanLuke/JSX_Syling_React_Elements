import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">A Random Photo</h1>

    <img alt="randomPic" src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
