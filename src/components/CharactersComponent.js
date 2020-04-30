import React, { Component } from 'react'
import styles from '../assets/styles/characters.css'

const CharactersComponent = props => {
  console.group(props.characters, 'prop')

  return (
    <div className='div-container'>
      <div class='story-grid-container'>
        {props.characters.data.map((character, index) => (
          <div>
            <div class='grid-item'>
              <img className='characters-avatar' src={character.avatar} />
              <h1 className="characters-container">{character.name} </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CharactersComponent
