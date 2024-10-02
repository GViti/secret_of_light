import React from "react";
import './WorkTogether.css';

function WorkTogether (){
    return (
        <section className="work-together">
            <div className="together">  
                <div className="testo-work-together">
                    <h2 className="intern-text">Accendiamo idee brillanti insieme!</h2>
                    <p className="intern-text">Se sei un professionista in cerca di prodotti di alta gamma o un cliente privato che desidera un'illuminazione unica per la propria casa, Secret of Light è qui per te.  </p>
                    <p className="intern-text">Offriamo soluzioni innovative e personalizzate per trasformare ogni ambiente in un'esperienza luminosa e accogliente. Con la nostra esperienza nel settore, garantiamo qualità, affidabilità e design impeccabile.</p>
                    <p className="intern-text">Scopri il segreto di un'illuminazione straordinaria con Secret of Light, dove ogni dettaglio conta.</p>
                    <div className="contact-us">
                       <h4><a href="contact.html">Contattaci</a></h4>
                    </div>
                </div>
                {/* <div className="img-work-togheter">
                    <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div> */}
            </div>
        </section>
    )
}

export default WorkTogether;
