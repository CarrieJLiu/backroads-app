import React from 'react'
import { tours } from '../data'

const Tour = () => {
  return (
    
    <div className="section-center featured-center">
      {tours.map((tour) => {
        const { id, img,date, info, text, country, days, money } = tour
        return (
          <article className="tour-card" key={id}>
          <div className='tour-img-container'>
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">            
              <h4>{info}</h4>
            <p>
             {text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span>{country}
              </p>
              <p>{days}</p>
              <p>{money}</p>
            </div>
          </div>
        </article>
        );
      })
      }
    </div>
  )
}

export default Tour;