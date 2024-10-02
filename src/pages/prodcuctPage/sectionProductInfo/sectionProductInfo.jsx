import React, { useState } from "react";
import './sectionProductInfo.css';

function SectionProductInfo() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Qui puoi gestire l'invio del form, ad esempio inviando i dati a un server
        console.log('Form submitted:', formData);
    };

    return (
        <section className="product-info">
            <div className="product-info-contenuto">
                <div className="testo-form">
                    <h3>Ti servono più informazioni sui prodotti visualizzati oppure non hai ancora trovato quello che cerchi?</h3>
                    <h4>Compila il form oppure contattaci direttamente!</h4>
                </div>
                <form onSubmit={handleSubmit} className="product-info-form">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nome o Nome Azienda:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Cellulare:</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Messaggio:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                        ></textarea>
                    </div>
                    <button type="submit">Invia</button>
                </form>
            </div>
        </section>
    );
}

export default SectionProductInfo;
