import React from 'react'
import '../assets/styles/singleCreators.css'
import { Link } from 'react-router-dom'

const SingleCreatorComponent = props => {
  return (
    <div className="div-container">
      <main>
        <article className='grid'>
          <section className='grid__col-2'>
            <div className='grid__item-lg'>
              <img
                src={props.creator.data.avatar}
                className='grid__item__img'
              />
              <p className='grid__item__category'>Managing People</p>
              <h4 className='grid__item__title'>
              {props.creator.data.first_name} {props.creator.data.last_name}

              </h4>
              <p className='grid__item__author'>By Jennifer Romolini</p>
            </div>
            <div className="second_card">
              <h3 className='grid__col__title'>Creator's Details</h3>
              <div className='grid__item-sm'>
                <div>
                  <h3 className='grid__item__category'>Bio</h3>
                  <p>dbhsavfhsdfvhsadfvdhsgf</p>
                  <p className='grid__item__author'>By Annette Cardwell</p>
                </div>
                <div>
                  <h3 className='grid__item__category'>Contact Details</h3>
                  <p className='grid__item__title'>
                  Email:<br/>{props.creator.data.email} 
                  </p>
                  <p className='grid__item__title'>
                  Phone:<br/>{props.creator.data.email} 
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
