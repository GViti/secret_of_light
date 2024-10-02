import React, { useState } from 'react';
import './ProjectsHome.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';
import work1 from '../../../../assets/images/work1.jpg';
import work2 from '../../../../assets/images/work2.jpg';
import work3 from '../../../../assets/images/work3.jpg';



const HomeProject = () => {
    const [selectedCard, setSelectedCard] = useState(1);

    return (
        <section className="home-project">
            <h2><a href="lavori.html">I nostri lavori</a></h2>
            <div className="container01">
                <input 
                    type="radio" 
                    name="slider" 
                    id="item-1" 
                    checked={selectedCard === 1} 
                    onChange={() => setSelectedCard(1)} 
                />
                <input 
                    type="radio" 
                    name="slider" 
                    id="item-2" 
                    checked={selectedCard === 2} 
                    onChange={() => setSelectedCard(2)} 
                />
                <input 
                    type="radio" 
                    name="slider" 
                    id="item-3" 
                    checked={selectedCard === 3} 
                    onChange={() => setSelectedCard(3)} 
                />
                <div className="cards01">
                    <label 
                        className={`card01 ${selectedCard === 1 ? 'active' : ''}`} 
                        htmlFor="item-1" 
                        id="song-1"
                    >
                        <img 
                            src={work1} 
                            alt="song"
                        />
                    </label>
                    <label 
                        className={`card01 ${selectedCard === 2 ? 'active' : ''}`} 
                        htmlFor="item-2" 
                        id="song-2"
                    >
                        <img 
                            src={work2} 
                            alt="song"
                        />
                    </label>
                    <label 
                        className={`card01 ${selectedCard === 3 ? 'active' : ''}`} 
                        htmlFor="item-3" 
                        id="song-3"
                    >
                        <img 
                            src={work3} 
                            alt="song"
                        />
                    </label>
                </div>
            </div>
            <div className="all">
                <Link to="/works">Scopri di più</Link>
            </div>
        </section>
    );
};

export default HomeProject;