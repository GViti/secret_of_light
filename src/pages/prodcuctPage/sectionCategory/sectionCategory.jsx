import React, { useEffect, useState } from 'react';
import './sectionCategory.css';
import fetchData from '../../../api/api_category';

const SectionCategory = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const categoryData = await fetchData();
        setCategories(categoryData.data);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className='select-category'>
      <h2>Seleziona la categoria</h2>
      <div className="category-list">
        {categories.map((category) => {
          const imgData = category.attributes.categoryImg.data;
          const thumbnailUrl = imgData && imgData[0].attributes.formats.thumbnail.url;
          const imgSrc = thumbnailUrl ? `https://strapi-178394-0.cloudclusters.net${thumbnailUrl}` : 'default_image_url_here'; // metti qui l'url di una immagine di default
          
          return (
            <div key={category.id} className="category-name" data-id={category.id}>
              <a href="#">
                <img src={imgSrc} alt={category.attributes.nomeCategoria} />
                <p>{category.attributes.nomeCategoria}</p>
              </a>
            </div>
          );
        })}
      </div>
      <div className="category-txt">
        <h2>Benvenuti nel nostro catalogo prodotti! </h2>
        <p>Esplora la nostra vasta gamma di articoli, accuratamente scelti per garantirvi il massimo della qualità. Dai profili ai driver, dai LED ai pannelli, abbiamo tutto ciò di cui avete bisogno. I nostri prodotti sono organizzati in categorie specifiche per una navigazione semplice e intuitiva. Scoprite tutte le nostre categorie e trovate i prodotti perfetti per le vostre esigenze. Non perdetevi le nostre ultime novità e le offerte speciali. Se avete domande o necessitate di assistenza, non esitate a contattarci. Buona esplorazione!</p>
      </div>
    </section>
  );
};

export default SectionCategory;
