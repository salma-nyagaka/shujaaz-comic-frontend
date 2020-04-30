import React, { Component } from 'react'
import styles from '../assets/styles/home.css'
import { Link } from 'react-router-dom'

class HomeComponent extends Component {
  render () {
    return (
      <div className='home-div-container'>
        <div className='home-grid-container'>
          {this.props.comics.data.map((comic, index) => (
            <Link key={index}
              to='comic'
              onClick={() => window.open(`/comic/${index + 1}`)}
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
}

export default HomeComponent
