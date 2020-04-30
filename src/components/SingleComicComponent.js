import React from 'react'
import styles from '../assets/styles/singleComic.css'
import { Link } from 'react-router-dom'

const SingleComicComponent = props => {
  let id = window.location.pathname.replace('http://', '').split('/')

  return (
    <div className='single-comic-div-container '>
      <nav className='comic_nav__page'>
        <Link
          to='stories'
          className='comic_nav__page__link'
          onClick={() => window.open(`/stories/${id[2]}`)}
        >
          {' '}
          VIEW STORIES
        </Link>
      </nav>

      <div className='header'>
        <img
          className='comic-avatar'
          src={props.comic.data.avatar}
          alt='avatar'
        />
      </div>

      <div className='row'>
        <div className='leftcolumn'>
          <div className='card'>
            <h2>{props.comic.data.title}</h2>
            <p>{props.comic.data.summary}</p>
          </div>
        </div>
        <div className='rightcolumn'>
          <div className='card'>
            <h2>Creator</h2>

            <div className='fakeimg'>
              <img
                className='creator-image'
                src={props.comic.data.creator.avatar}
                alt='avatar'
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
