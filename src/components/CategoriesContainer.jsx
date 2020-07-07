import React from 'react'
import '../assets/styles/components/CategoriesContainer.scss'

const CategoriesContainer = ( {children} ) => (
    <div className="carousel__container">
        {children}
    </div>
)

export default CategoriesContainer