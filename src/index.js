import React from "react";
import { createRoot } from 'react-dom/client';
import Output from "./App";

//              what     where
const root = createRoot( document.getElementById('root'));
root.render(<Output/>);