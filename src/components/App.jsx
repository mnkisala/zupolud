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
    </div >
  )
}

export default App