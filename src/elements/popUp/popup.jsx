import React from "react"; // Importa React
import './popUp.css'; // Importa il CSS per lo stile del popup

function Popup({ isOpen, onClose }) {
    return (
      isOpen && (
        <div className="popup">
          <div className="popup-content">
            <p>Ci stiamo rifacendo il look!</p>
            <p>Nel frattempo scarica il catalogo o contattaci tramite il form!</p>
            <button onClick={onClose}>Chiudi</button>
          </div>
        </div>
      )
    );
}

export default Popup;
