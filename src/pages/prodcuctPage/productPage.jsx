import React, {useEffect} from "react";
import './productPage.css';
import SectionCategory from "./sectionCategory/sectionCategory.jsx";
import SectionProductPreview from "./sectionProductPreview/sectionProductPreview.jsx";
import SectionProductInfo from "./sectionProductInfo/sectionProductInfo.jsx";


const ProductPage = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#f3ede6';
        document.body.style.color = '#000';
        document.body.style.textAlign = 'center';
    
        return () => {
          document.body.style.backgroundColor = '';
        };
      }, []);

    return (
        <>
            <SectionCategory/>
            <SectionProductPreview/>
            <SectionProductInfo/>
        </>
    )
}

export default ProductPage;
