import React from "react";
import "./AProposStyle.css";
// import { openClose } from "./AProposOpenClose";

export default function APropos() {
  // const btn = document.querySelector('.btn-box');
  // btn.addEventListener('click', openClose);
  return (
    
    <main>
      <div className="A-Propos-contents">
        <img className="navbar-background" src={process.env.PUBLIC_URL + '/Mask Group.png'} alt="logo" />

        <div className="box">
          <button className="btn-box">
            <h1 className="title-box">Fiabilité</h1>
          </button>
          <p className="description-box">
            Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement
            vérifiées  par nos équipes.
          </p>
        </div>

        <div className="box">
          <button className="btn-box">
            <h1 className="title-box">Respect</h1>
          </button>
          <p className="description-box">
            La bienveillance fait partie des valeurs fondatrices de Kasa.
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera
            une exclusion de notre plateforme.
          </p>
        </div>

        <div className="box">
          <button className="btn-box">
            <h1 className="title-box">Service</h1>
          </button>
          <p className="description-box">
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
            N'hésitez pas à nous contacter si vous avez la moindre question.
          </p>
        </div>

        <div className="box">
          <button className="btn-box">
            <h1 className="title-box">Sécurité</h1>
          </button>
          <p className="description-box">
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