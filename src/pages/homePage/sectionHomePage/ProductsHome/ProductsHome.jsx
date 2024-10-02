import React, { useState, useEffect } from 'react';
import './ProductsHome.css';
import Slider from '../../../../components/elements/slider/slider.jsx';
import { Link } from 'react-router-dom';

function ProductsHome (){

    return (
        <section className="home-product">
            <h2><a href="prodotti.html">I nostri prodotti</a></h2>
            <Slider/>
            <div className="all">
                <Link to="/products">Scopri di più</Link>
            </div>
        </section>
    );
}

export default ProductsHome;

