import React from 'react';
import '../assets/styles/stories.css';
import { Link } from 'react-router-dom'


const StoriesComponent = (props) => {
  return (
    <div>
    <h1 className='big'>Stories</h1>
    <div className='row'>
      {props.stories.data.map((story, index) => (
        <Link to="stories"  onClick={() => window.open(`/stories/${index + 1}`)}>
        <div>
          <div className=' column card'>
            <img src={story.avatar} alt='Avatar' />
            <div className='container'>
              <h1>{story.title}</h1>
              <p>{story.paragraph}</p>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
<h3 className="made_by">Made with ♡</h3>
  </div>
  )
}

export default StoriesComponent
