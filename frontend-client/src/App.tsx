import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";

//here to get the hash
// @ts-ignore
const code: hash = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
