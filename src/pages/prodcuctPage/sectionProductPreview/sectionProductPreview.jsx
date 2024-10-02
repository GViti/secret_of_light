import React from "react";
import './sectionProductPreview.css';
import { Link } from 'react-router-dom'; 
import { products } from '../../../data/products';
import ProductCard from "../../../components/elements/productCard/productCard";

const categories = [
    { name: 'Profili', products: products.filter(product => product.cat === 'Profili').slice(0, 6) },
    { name: 'Driver', products: products.filter(product => product.cat === 'Driver').slice(0, 6) },
    { name: 'Led', products: products.filter(product => product.cat === 'Led').slice(0, 6) },
    { name: 'Illuminotecnica', products: products.filter(product => product.cat === 'Illuminotecnica').slice(0, 6) },
    { name: 'Pannelli', products: products.filter(product => product.cat === 'Pannelli').slice(0, 6) },
    { name: 'Power Truck', products: products.filter(product => product.cat === 'Power Truck').slice(0, 6) }
];

function SectionProductPreview() {

    return (
        <section className="product-list">
            {categories.map(category => (
                <div key={category.name} className="category-section">
                    <h2>{category.name}</h2>
                    <div className="products">
                        {category.products.map(product => (
                            <ProductCard 
                                key={product.id}
                                name={product.name} 
                                cat={product.cat} 
                                img={product.img} 
                            />
                        ))}
                    </div>
                    <div className="all">
                        <a href="prodotti.html">See More</a>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default SectionProductPreview;
