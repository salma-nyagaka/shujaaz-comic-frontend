import React, { Component } from 'react'
import styles from '../assets/styles/home.css'
import { Link } from 'react-router-dom'


class HomeComponent extends Component  {

  render(){

    return (
      
      <div className="div-container">
        <div className='row'>
          {this.props.comics.data.map((comic, index) => (
            <Link to="stories"  onClick={() => window.open(`/comic/${index + 1}`)}>

            <div>
              <div className=' column card'>
                <img src={comic.avatar} className="home-img" alt='Avatar' />
                <div className='container'>
                </div>
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
