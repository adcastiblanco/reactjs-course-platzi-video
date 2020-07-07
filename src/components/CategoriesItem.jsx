import React from 'react'
import '../assets/styles/components/CategoriesItem.scss'

import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'

const CategoriesItem = ( {title, img} ) => (
    <div className="carousel-item">
    <img className="carousel-item__img" src={img} alt=""  />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
        <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon"/> 
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
  </div>
)

export default CategoriesItem