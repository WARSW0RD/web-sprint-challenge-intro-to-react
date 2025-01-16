import React, { useState } from 'react'

function Character({ person, planet }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not

  const [rendered, setRendered] = useState(false);

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggle = (onClick) => {
    setRendered(!rendered);
    console.log('planet rendered')
  }

  return (
    <div className="character-card"onClick={toggle}>
      <h3 className="character-name" >
        {person.name}
      </h3>

      {rendered && planet && (
        <p>
          Planet:  <span className="character-planet">{planet.name}</span>
        </p>
      )}
    </div>
  );
}

export default Character
