import React from 'react';
import '../assets/styles/stories.css';
import CharactersContainer from '../containers/CharactersContainer'


const StoriesComponent = (props) => {
  return (
    <div className="div-container">
    <main>
      <article className='grid'>
        <section className='grid__col-2'>
          <div className='grid__item-lg'>
            {/* <img
              // src={props.stori}
              className='grid__item__img'
            /> */}
            

            <h3 className='grid__col__title'>Characters</h3>
            <CharactersContainer/>
            <h4 className='grid__item__title'>
            {/* {props.creator.data.first_name} {props.creator.data.last_name} */}

            </h4>
            <p className='grid__item__author'>By Jennifer Romolini</p>
          </div>
          <div className="second_card">
            <h3 className='grid__col__title'>Stories</h3>
            <div className='grid__item-sm '>
            {props.stories.data.map(story =>
                  <div className="grid-stories-item"> 
                  <h3 className='grid__item__category'>{story.title}</h3>
                  <p>{story.paragraph}</p>
                  <p className='grid__item__author'>CLICK TO READ MORE</p>
                </div>)}
            </div>
          </div>
        </section>
      </article>
    </main>
  </div>
  )
}

export default StoriesComponent
