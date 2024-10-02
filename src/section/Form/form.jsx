// import React from "react";
// import './form.css';

// function FormContatti() {
//     return (
//         <>
//         <section className="contactForm">
//             <h3>Contattaci per informazioni</h3>
//             <h4>Compila il form e sarai ricontattato al più presto con le informazioni richieste</h4>
//             <form onSubmit="">
//                 <label>Nome: </label>
//                 <input type="text" name="nome" />

//                 <label>Cognome: </label>
//                 <input type="text" name="cognome" />

//                 <label>Email: </label>
//                 <input type="text" name="email" />

//                 <label>Numero di telefono: </label>
//                 <input type="number" name="telefono" />

//                 <label>Messaggio: </label>
//                 <input type="text" name="messaggio" />

//                 <input type="submit" value="Invia" />
//             </form>
//         </section>
//         </>
        
//     )
// }

// export default FormContatti;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './form.css'; 

function FormContatti() {
    const form = useRef(); 

    const inviaEmail = (e) => {
        e.preventDefault(); 

        emailjs.sendForm(
            'service_07ijamd',  // Il tuo Service ID
            'template_0qtihob',    // Il tuo Template ID
            form.current,        // Riferimento al form
            'aOvkaX9kGnibzIh9R'  // Il tuo User ID
        )
        .then((result) => {
            console.log('Email inviata:', result.text);
            alert('Email inviata con successo!');
        }, (error) => {
            console.log('Errore nell\'invio:', error.text);
            alert('Errore durante l\'invio dell\'email.');
        });

        e.target.reset(); // Resetta il modulo dopo l'invio
    };

    return (
        <section className="contactForm" id='form-landing'>
            <h3>Contattaci per informazioni</h3>
            <h4>Compila il form e sarai ricontattato al più presto con le informazioni richieste</h4>
            <form ref={form} onSubmit={inviaEmail}>
                <label>Nome: </label>
                <input type="text" name="nome" required />

                <label>Cognome: </label>
                <input type="text" name="cognome" required />

                <label>Email: </label>
                <input type="email" name="email" required />

                <label>Numero di telefono: </label>
                <input type="tel" name="telefono" required />

                <label>Messaggio: </label>
                <textarea name="messaggio" rows="5" required></textarea>

                <input type="submit" value="Invia" />
            </form>
        </section>
    );
}

export default FormContatti;
