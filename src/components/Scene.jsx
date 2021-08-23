import React from "react"

const Scene = ({ scene_obj, goto }) => {

  return (
    <div>
      <p>{scene_obj.description}</p>

      <ul>
        {scene_obj.choices.map(({ description, destination }, index) =>
        (<li
          key={index}>
          <a href="#" onClick={() => goto(destination)}>
            {description}
          </a>
        </li>))
        }
      </ul>
    </div>
  )
}

export default Scene