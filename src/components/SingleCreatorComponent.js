import React from 'react'
import '../assets/styles/singleCreators.css'

const SingleCreatorComponent = props => {
  return (
    <div className='div-container'>
      <main>
        <article className='grid'>
          <section className='grid__col-2'>
            <div className='grid__item-lg'>
              <img
                src={props.creator.data.avatar}
                alt='avatar'
                className='grid__item__img'
              />
              <h4 className='grid__item__title'>
                {props.creator.data.first_name} {props.creator.data.last_name}
              </h4>
              <p className='grid__item__author'> {props.creator.data.bio}</p>
            </div>
            <div className='second_card'>
              <h3 className='grid__col__title'>Creator's Details</h3>
              <div className='grid__item-sm'>
                <div>
                  <h3 className='grid__item__category'>Contact Details</h3>
                  <p className='grid__item__title'>
                    Email:
                    <br />
                    {props.creator.data.email}
                  </p>
                  <p className='grid__item__title'>
                    Phone:
                    <br />
                    07655675657
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}

export default SingleCreatorComponent
