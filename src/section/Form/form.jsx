// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import './form.css'; 

// function FormContatti() {
//     const form = useRef(); 

//     const inviaEmail = (e) => {
//         e.preventDefault(); 

//         emailjs.sendForm(
//             'service_07ijamd',  // Il tuo Service ID
//             'template_0qtihob',    // Il tuo Template ID
//             form.current,        // Riferimento al form
//             'aOvkaX9kGnibzIh9R'  // Il tuo User ID
//         )
//         .then((result) => {
//             console.log('Email inviata:', result.text);
//             alert('Email inviata con successo!');
//         }, (error) => {
//             console.log('Errore nell\'invio:', error.text);
//             alert('Errore durante l\'invio dell\'email.');
//         });

//         e.target.reset(); // Resetta il modulo dopo l'invio
//     };

//     return (
//         <section className="contactForm" id='form-landing'>
//             <h3>Contattaci per informazioni</h3>
//             <h4>Compila il form e sarai ricontattato al più presto con le informazioni richieste</h4>
//             <form ref={form} onSubmit={inviaEmail}>
//                 <label>Nome: </label>
//                 <input type="text" name="nome" required />

//                 <label>Cognome: </label>
//                 <input type="text" name="cognome" required />

//                 <label>Email: </label>
//                 <input type="email" name="email" required />

//                 <label>Numero di telefono: </label>
//                 <input type="tel" name="telefono" required />

//                 <label>Messaggio: </label>
//                 <textarea name="messaggio" rows="5" required></textarea>

//                 <input type="checkbox" name="privacy" required/>
//                 <label className="checkbox">Accetto la <a href="">Privacy Policy</a> e acconsento al trattamento dei miei dati.</label>

//                 <input type="submit" value="Invia" />
//             </form>
//         </section>
//     );
// }

// export default FormContatti;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.css'; 

function FormContatti() {
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false); // Stato per il modal

    const inviaEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_07ijamd',  // Il tuo Service ID
            'template_0qtihob', // Il tuo Template ID
            form.current,       // Riferimento al form
            'aOvkaX9kGnibzIh9R' // Il tuo User ID
        )
        .then((result) => {
            console.log('Email inviata:', result.text);
            alert('Email inviata con successo!');
        }, (error) => {
            console.log('Errore nell\'invio:', error.text);
            alert('Errore durante l\'invio dell\'email.');
        });

        e.target.reset();
    };

    // Funzione per aprire il modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Funzione per chiudere il modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="contactForm" id='form'>
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
                <div className='inputPrivacy'>
                    <input type="checkbox" name="privacy" required/>
                    <label className="checkbox">
                        Accetto la <a onClick={openModal}>Privacy Policy</a> e acconsento al trattamento dei miei dati.
                    </label>
                </div>
                <input type="submit" value="Invia" />
            </form>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Privacy Policy</h2>
                        <h4>Finalità del trattamento:</h4>
                        <p>I dati personali forniti tramite il modulo di contatto saranno utilizzati esclusivamente per rispondere alle richieste di informazioni da parte dell'utente.</p>
                        <h4>Dati raccolti:</h4>
                        <p>Nome, cognome, email e numero di telefono</p>
                        <h4>Titolare del Trattamento dei Dati:</h4>
                        <ul>
                            <li> Secret of Light S.A.S. - Via Lombardore 124,
                            10040 Leinì TO</li>
                            <li>Indirizzo email del Titolare:info@secretoflight.it</li>
                        </ul>
                        <h4>Diritti dell'utente:</h4>
                        <p>Gli utenti hanno il diritto di accedere ai propri dati personali, richiedere la correzione o la cancellazione dei dati, e limitare il trattamento dei propri dati inviando una richiesta all'indirizzo email sopra indicato.</p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default FormContatti;

