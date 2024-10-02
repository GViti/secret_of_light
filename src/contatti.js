import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_07ijamd', // Il tuo Service ID
            'template_12345', // Il tuo Template ID
            form.current,
            'user_AbCdEfGh123456789' // Il tuo User ID
        )
        .then((result) => {
            console.log(result.text);
            alert('Email inviata con successo!');
        }, (error) => {
            console.log(error.text);
            alert('Errore nell\'invio dell\'email.');
        });

        e.target.reset(); // Resetta il modulo dopo l'invio
    };

    return (
        <div>
            <h2>Contattaci</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>Nome</label>
                    <input type="text" name="user_name" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="user_email" required />
                </div>
                <div>
                    <label>Messaggio</label>
                    <textarea name="message" required></textarea>
                </div>
                <div>
                    <button type="submit">Invia</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
