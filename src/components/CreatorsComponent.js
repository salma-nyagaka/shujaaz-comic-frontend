import React from 'react';
import '../assets/styles/creators.css';
import { Link } from 'react-router-dom'


const CharactersComponent = props => {
  return (
    <div className="div-container">
    {/* <h1 className='big'>Creators</h1> */}
    <div className='row'>
      {props.creators.data.map((creator, index) => (
        <div>
          <div className=' column card'>
            <img src={creator.avatar} className="creators-image" alt='Avatar' />
            <div className='container'>
              <h1>{creator.first_name} {creator.last_name}</h1>
              <button className="profile-button"  onClick={() => window.open(`/creators/${index + 1}`)}>View profile</button>
            </div>
          </div>
        </div>
      ))}
    </div>
<h3 className="made_by">Made with ♡</h3>
  </div>
  )
}

export default CharactersComponent
