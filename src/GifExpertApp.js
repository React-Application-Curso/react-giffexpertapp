import React, { useState, Fragment } from 'react'
// import PropTypes from 'prop-types'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])
    // const handleAdd = () => {
    //     // setCategories([...categories, 'HunterXHunter']);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    // <button onClick={ handleAdd }>Agregar</button>

    // }

    return ( 
        <Fragment>
            <h2> GifExpertApp </h2> 
            <AddCategory setCategories = { setCategories }/>
            <hr/>
            <ol>
            {
                categories.map( category => (
                    <GifGrid key = { category } 
                             category = { category } />
                   /* return <li key={category}>{category}</li>*/
                ))
            }
            </ol>
        </Fragment>            
    );
}
GifExpertApp.propTypes = {
}
GifExpertApp.defaultProps = {
}
export default GifExpertApp;