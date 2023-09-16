import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// react Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React ");


// React Component 
//  - Class Base 
//  - Functional base 
//  -React functional Component is just a javascript function which returns some JSX 

const HeadingComponent =()=>{
    return (
        <>
    <h1> React Functional Component </h1>
    <h2> MultiLine react component</h2>
    </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
