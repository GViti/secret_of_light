// import React from "react";
// import './productCard.css';

// function ProductCard({ name, cat, img }) {
//     return (
//         <div className="product">
//             <a href="single-product.html">
//                 <div className="prod-picture">
//                     <img src={img} alt={name} />
//                 </div>
//                 <div className="detail">
//                     <h3>{name}</h3>
//                     <span>{cat}</span>
//                 </div>
//             </a>
//         </div>
//     );
// }

// export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";
import './productCard.css';

function ProductCard({ name, cat, img }) {
    const productUrl = `/product/${encodeURIComponent(name)}`;
    
    return (
        <div className="product">
            <Link to={productUrl}>
                <div className="prod-picture">
                    <img src={img} alt={name} />
                </div>
                <div className="detail">
                    <h3>{name}</h3>
                    <span>{cat}</span>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;