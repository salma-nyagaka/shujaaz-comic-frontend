import React from 'react'
import styles from '../assets/styles/home.css'


const HomeComponent = props => {
  console.log(props, 'props')
  // renderObj = () => {
  //   props.comics.data.map((obj, i) => {
  //     return (
  //       <div>
  //         {props.data[obj].name}
  //       </div>
  //     )})}
  return (
    <div>
      <h1 className='big'>Shujaaz Inc</h1>
      <h2 className='big'>Comics!!!</h2>
      <div className='row'>
        {props.comics.data.map((comic, key) => (
          <div>
            <div className=' column card'>
              <img src={comic.avatar} alt='Avatar' />
              <div className='container'>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeComponent
