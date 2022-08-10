import React from "react";
import { Link } from "react-router-dom";
import "./Error404Style.css";

export default function Error404() {
    return (
        // page d erreur 404
        <div className="container-error">
            <h1 className="error-404">404</h1>
            <span className="description-error">Oups! La page que vous demandez n'existe pas.</span>
            {/* lien vers l accueil */}
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    );
}