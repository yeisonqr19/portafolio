import React from "react";
import "./contactoForm.css";

export const ContactoForm = () => {
  return (
    <>
      <div className="contacto">
        <h1>Contacto</h1>
        <div className="contacto-container">
          <div className="contacto-info">
            <div className="info-content">
              <i className="fas fa-usercircle icon"></i>
              <h2>INFORMACION DE CONTACTO</h2>
              <p>
                <i className="fas fa-envelope"></i>
                ejemplo@gmail.com
              </p>

              <p>
                <i className="fas fa-phone"></i>
                +57-3000000000
              </p>
            </div>
          </div>

          <div className="contacto-form">
            <h2>Envia tu Mensaje</h2>
            <form action="">
              <input
                type="text"
                name="nombres"
                id="nombres"
                placeholder="nombre y Apellido"
                required
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Correo Electronico"
                required
              />

              <textarea
                name="mensaje"
                id="mensaje"
                placeholder="Mensaje"
                required
              ></textarea>

              <button type="submit">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
