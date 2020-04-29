import React, { Component } from 'react'
import styles from '../assets/styles/characters.css'


const CharactersComponent = props => {
    console.group(props.characters, "prop")

    return (
      <div className="div-container">
      {/* <h1 className='big'>Shujaaz Inc</h1>
        <h2 className='big'>Comics!!!</h2> */}
              <div class="grid-container">
          {props.characters.data.map((character, index) => (
            <div>
              {/* <div class="card">{character.name}</div> */}

{/* <h2>{character.name}</h2> */}

<div class="grid-item">{character.name}</div>
            </div>
          ))}
         
        </div>
      </div>
    )
  }

export default CharactersComponent
