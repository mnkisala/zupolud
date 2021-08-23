import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

export default function main() {
  const view = document.getElementById("react-view")

  ReactDOM.render(<App />, view)
}