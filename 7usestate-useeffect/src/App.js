import React, { Component, useEffect, useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  // variation 1 -> after first render + after Every update or re-render

  // useEffect(() => {
  //   console.log("UI rendering done");
  // });

  // variation 2 -> only after First Render

  // useEffect(() => {
  //   console.log("UI rendering done");
  // }, []);

  // variation 3 -> after first render + whenever dependency changes

  // useEffect (()=>{
  //   console.log("change observed")
  // }, [text])

  // variation 4 -> to handle unmounting of a Component

  useEffect(() => {
    // add event listener
    console.log("listener added");

    return () => {
      console.log("Listener removed");
    };
  }, [text]);

  const changeHandler = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  return (
    <div className="App">
      {/* {console.log("return")} */}

      <input type="text" value={text} onChange={changeHandler}></input>
    </div>
  );
};

export default App;
