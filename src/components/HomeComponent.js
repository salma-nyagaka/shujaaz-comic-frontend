import React from 'react'
import styles from '../assets/styles/home.css'
import { Link, useHistory } from 'react-router-dom'


const HomeComponent= props => {
  let history = useHistory();
    return (
      <div className='home-div-container'>
        <div className='home-grid-container'>
          {props.comics.data.map((comic, index) => (
            <Link
              key={index}
              onClick={() =>  history.push(`/comic/${index + 1}`)}
            >
              <div>
                <div className='home-grid-item'>
                  <img src={comic.avatar} className='home-img' alt='Avatar' />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  
}

export default HomeComponent
