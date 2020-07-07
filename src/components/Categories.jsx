import React from 'react'
import '../assets/styles/components/Categories.scss'

const Categories = ({ children, title }) => (
    <div className="Categories">
        <h3 className="categories__title">{title}</h3>
        <section className="carousel">
            {children}
        </section>
    </div>
)

export default Categories