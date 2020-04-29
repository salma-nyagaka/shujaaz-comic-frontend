import React, { Component } from 'react'
import styles from '../assets/styles/singleComic.css'
import { Link } from 'react-router-dom'

const SingleComicComponent = props => {
  console.group(props.comic.data, 'prop')
  let id = window.location.pathname.replace('http://', '').split('/')
  console.log(id, 'id')

  return (
    <div className='div-container'>
      <nav className='comic_nav__page'>
        <Link
          className='comic_nav__page__link'
          onClick={() => window.location.href(`/stories/${id[2]}`)}
        >
          {' '}
          VIEW STORIES
        </Link>
      </nav>

      <div className='header'>
        <img src={props.comic.data.avatar} />
      </div>

      <div className='row'>
        <div className='leftcolumn'>
          <div className='card'>
            <h2>{props.comic.data.title}</h2>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className='rightcolumn'>
          <div className='card'>
            <h2>Creator</h2>

            <div className='fakeimg'>
              <img
                className='creator-image'
                src={props.comic.data.creator.avatar}
              />
            </div>
            <p>
              {props.comic.data.creator.first_name}{' '}
              {props.comic.data.creator.last_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleComicComponent
