import React, { Component } from 'react'
import styles from '../assets/styles/home.css'
import { Link } from 'react-router-dom'


class HomeComponent extends Component  {
  constructor(props) {
    super(props)
    this.state = {
        attributes: [],
        details: [],
        count: 0
    }

}
  render(){

    return (
      <div className="div-container">
      {/* <h1 className='big'>Shujaaz Inc</h1>
        <h2 className='big'>Comics!!!</h2> */}
        <div className='row'>
          {this.props.comics.data.map((comic, index) => (
            <Link to="stories"  onClick={() => window.open(`/stories/${index + 1}`)}>
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
