import React from 'react'
import '../assets/styles/creators.css'
import { Link, useHistory } from 'react-router-dom'

const CharactersComponent = props => {
  let history = useHistory();
  return (
    <div className='div-container'>
      <div className='creators-div-container'>
        <div className='creators-grid-container'>
          {props.creators.data.map((creator, index) => (
            <div>
              <div className='creators-grid-item'>
                <img
                  src={creator.avatar}
                  className='creators-image'
                  alt='Avatar'
                />
                <h2>
                  {creator.first_name} {creator.last_name}{' '}
                </h2>
                <Link
                  className='profile-button'
                  onClick={() => history.push(`/creators/${index + 1}`)}
                >
                  VIEW PROFILE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharactersComponent
