import React, { useState } from "react";
import "./AProposStyle.css";

export default function APropos() {
  const [isOpenFiabilité, setIsOpenFiabilité] = useState(false);
  const [isOpenRespect, setIsOpenRespect] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);
  const [isOpenSécurité, setIsOpenSécurité] = useState(false);

  return (

    <main>
      <div className="A-Propos-contents">
        <img className="navbar-background" src={process.env.PUBLIC_URL + '/Mask Group.png'} alt="logo" />

        {/* boite de de "A Propos" */}
        
        <div className="box">
          <button className="btn-box" onClick={() => setIsOpenFiabilité(!isOpenFiabilité)}>
            <h1 className="title-box">Fiabilité</h1>
          </button>
          <p className="description-box" style={{ display: isOpenFiabilité ? "block" : "none" }}>
            Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement
            vérifiées  par nos équipes.
          </p>
        </div>

        <div className="box">
          <button className="btn-box" onClick={() => setIsOpenRespect(!isOpenRespect)}>
            <h1 className="title-box">Respect</h1>
          </button>
          <p className="description-box" style={{ display: isOpenRespect ? "block" : "none" }}>
            La bienveillance fait partie des valeurs fondatrices de Kasa.
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera
            une exclusion de notre plateforme.
          </p>
        </div>

        <div className="box">
          <button className="btn-box" onClick={() => setIsOpenService(!isOpenService)}>
            <h1 className="title-box">Service</h1>
          </button>
          <p className="description-box" style={{ display: isOpenService ? "block" : "none" }}>
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
            N'hésitez pas à nous contacter si vous avez la moindre question.
          </p>
        </div>

        <div className="box">
          <button className="btn-box" onClick={() => setIsOpenSécurité(!isOpenSécurité)}>
            <h1 className="title-box">Sécurité</h1>
          </button>
          <p className="description-box" style={{ display: isOpenSécurité ? "block" : "none" }}>
            La sécurité est la priorité de Kasa.
            Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond
            aux critères de sécurité établis par nos services. En laissant une note aussi
            bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
            standards sont bien respectés. Nous organisons également des ateliers sur
            la sécurité domestique pour nos hôtes.
          </p>
        </div>

      </div>
    </main>
  );
}