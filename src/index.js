import React from "react";
import ReactDOM from "react-dom/client";
import Output from "./App"
//              what     where
const container = document.getElementById('root');

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(<Output/>);