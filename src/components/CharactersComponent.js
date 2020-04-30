import React from 'react'
import styles from '../assets/styles/characters.css'

const CharactersComponent = props => {

  return (
    <div className='div-container'>
      <div className='story-grid-container'>
        {props.characters.data.map((character, index) => (
          <div key={index}>
            <div className='grid-item'>
              <img className='characters-avatar' src={character.avatar} alt="avatar"/>
              <h1 className="characters-container">{character.name} </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CharactersComponent
