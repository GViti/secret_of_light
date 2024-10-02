// import React, { useState, useRef } from "react";
// import './slider.css';
// import { products } from '../../../data/products';
// import ProductCard from '../productCard/productCard.jsx';

// const Slider = () => {
//     const sliderRef = useRef(null);

//     const scroll = (direction) => {
//         if (sliderRef.current) {
//             const { scrollLeft, clientWidth } = sliderRef.current;
//             const scrollTo = direction === "next" ? scrollLeft + clientWidth : scrollLeft - clientWidth;
//             sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
//         }
//     };

//     const productsSlice = [products.filter(prod => prod.evidenza === 'si').slice(0, 12)];

//     return (
//         <div className="slider-container">
//             <button className="btn-slider prev" onClick={() => scroll('prev')}>&#10094;</button>
//             <div className="slider" ref={sliderRef}>
//                 {productsSlice.map((product) => (
//                     <div className="slide" key={product.id}>
//                         <ProductCard 
//                             name={product.name} 
//                             cat={product.cat} 
//                             img={product.img} 
//                         />
//                     </div>
//                 ))}
//             </div>
//             <button className="btn-slider next" onClick={() => scroll('next')}>&#10095;</button>
//         </div>
//     );
// };

// export default Slider;

import React, { useRef } from 'react';
import './slider.css';
import { products } from '../../../data/products';
import ProductCard from '../productCard/productCard.jsx';

const Slider = () => {
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const { scrollLeft, clientWidth } = sliderRef.current;
            const scrollTo = direction === 'next' ? scrollLeft + clientWidth : scrollLeft - clientWidth;
            sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    const productsSlice = products.filter(prod => prod.evidenza === 'si').slice(0, 12);

    return (
        <div className="slider-container">
            <button className="btn-slider prev" onClick={() => scroll('prev')}>&#10094;</button>
            <div className="slider" ref={sliderRef}>
                {productsSlice.map((product) => (
                    <div className="slide" key={product.id}>
                        <ProductCard 
                            name={product.name} 
                            cat={product.cat} 
                            img={product.img} 
                        />
                    </div>
                ))}
            </div>
            <button className="btn-slider next" onClick={() => scroll('next')}>&#10095;</button>
        </div>
    );
};

export default Slider;
