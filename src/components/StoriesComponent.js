import React from 'react'
import '../assets/styles/stories.css'
import CharactersContainer from '../containers/CharactersContainer'

const StoriesComponent = props => {
  return (
    <div className='div-container'>
      <main>
        <article className='grid'>
          <section className='grid__col-2'>
            <div className='grid__item-lg'>
              <h3 className='stories__grid__col__title'>Characters</h3>
              <CharactersContainer />
            </div>
            <div className='second_card'>
              <h3 className='stories__grid__col__title'>Stories</h3>
              <div className='grid__item-sm '>
                {props.stories.data.map((story, index) => (
                  <div className='grid-stories-item' key={index}>
                    <h3 className='stories__grid__item__category'>
                      {story.title}
                    </h3>
                    <p>{story.paragraph}</p>
                    <p className='grid__item__author'>CLICK TO READ MORE</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}

export default StoriesComponent
