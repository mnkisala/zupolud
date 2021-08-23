import React from "react"
import { useState } from "react"

import Scene from "./Scene"

import scenes from "../../res/scenes"

const App = () => {
  const [sceneId, setSceneId] = useState("PRKE")

  function goto(destination) {
    if (destination in scenes) {
      setSceneId(destination)
    } else {
      alert(`Scena #${destination} nie istnieje (jeszcze)`)
    }
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "2rem",
        }}
      > Zupolud </h1>
      <hr />
      <br />

      <Scene scene_obj={scenes[sceneId]} goto={goto} />

      <br />
      <hr />
      <br />
    </div >
  )
}

export default App