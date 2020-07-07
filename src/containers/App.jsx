import React, {useState, useEffect} from 'react' // Manejar estado y manejar peticiones

import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import CategoriesContainer from '../components/CategoriesContainer'
import CategoriesItem from '../components/CategoriesItem'
import Footer from '../components/Footer'

import useInitialState from '../hooks/useInitialState'

import PropTypes from 'prop-types'

import '../assets/styles/App.scss'

let App = () =>{
    let initialState = useInitialState('http://localhost:3000/initialState')
    return(
    <div className="App">
        <Header />
        <Search />
        {initialState.myList !== undefined &&(
        <Categories title="My list">
            <CategoriesContainer> 
                <CategoriesItem/>
            </CategoriesContainer>
        </Categories>)}
        <Categories title="Trends">
            <CategoriesContainer> 
                {initialState.trends.map(item =>
                <CategoriesItem key={item.id} title={item.title} img={item.cover}/>
                    )}
            </CategoriesContainer>
        </Categories>
        <Categories title="Originals">
            <CategoriesContainer> 
                {initialState.originals.map(item =>
                <CategoriesItem key={item.id} title={item.title} img={item.cover}/>
                    )}
            </CategoriesContainer>
        </Categories>
        <Footer/>
    </div>
)}
CategoriesItem.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string
}

export default App