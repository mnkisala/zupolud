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
      alert(`Scena #${destination} nie istnieje (jeszcze, ewentualnie nigdy nie istniala co tez jest mozliwe)`)
    }
  }

  const [jumpTo, setJumpTo] = useState("")

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "2rem",
        }}
      > Zupolud </h1>
      <h5>Scenariusz: Krystian Borowiec, (Nie wiem czy chce pisac ze Mikolaj czy Nikola czy po prostu podpisac sie 'nm' bo to wlasnie robie od jakiegos czasu) Kisala</h5>
      <hr />
      <br />

      <Scene scene_obj={scenes[sceneId]} goto={goto} />

      <br />
      <hr />
      <br />

      <p>
        <h3> "Narzedzia deweloperskie"</h3>
        <h5>Scena: {sceneId} </h5>
        <input type="text" name="goto" id="goto" value={jumpTo} onChange={(e) => {
          setJumpTo(e.target.value)
        }} />
        <button onClick={() => {
          goto(jumpTo)
          setJumpTo("")
        }}> Skocz </button>
      </p>
    </div >
  )
}

export default App