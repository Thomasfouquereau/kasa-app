import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './FicheLogementStyle.css'

export default function Fiche(props) {

    const { id } = useParams()
    const location = props.locations.find(item => item.id === id)
    const [currImg, setCurrImg] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main>
            <div className="container-fiche">
                <div className="card-fiche" key={location.id}>

                    {/* carrousel de photos */}

                    <div className="card-fiche-carrousel">
                        <button className="card-fiche-carrousel-button-left" onClick={() => { setCurrImg(currImg - 1) }}><img className="left-arrow" src={process.env.PUBLIC_URL + '/leftArrow.svg'} alt="logo" /></button>
                        <img className="card-fiche-carrousel-img" src={location.pictures[currImg]} alt="logo" />
                        <button className="card-fiche-carrousel-button-right" onClick={() => { setCurrImg(currImg + 1) }}><img className="right-arrow" src={process.env.PUBLIC_URL + '/rightArrow.svg'} alt="logo" /></button>
                    </div>

                    {/* info du logement et du host */}

                    <div className="card-fiche-info-host">
                        <div className="card-fiche-info-tag">
                            <div className="card-fiche-info">
                                <h1 className="card-fiche-title">{location.title}</h1>
                                <p className="card-fiche-host-description">{location.location}</p>
                            </div>
                            <div className="card-fiche-tags">
                                {/* recuperation des tags */}
                                {
                                    location.tags.map((item, index) => {
                                        return (
                                            <span className="card-fiche-tag" key={index}>{item}</span>
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                        <div className="card-fiche-host-rating">
                            <div className="card-fiche-host">
                                <img className="card-fiche-host-img" src={location.host.picture} alt="logo" />
                                <h1 className="card-fiche-host-name">{location.host.name}</h1>
                            </div>

                            {/* notations du logement */}

                            <div className="card-fiche-rating-stars">
                                {
                                    Array(location.rating).fill(0).map((item, index) => {
                                        return (
                                            <img className="card-fiche-rating-star" key={index} src={process.env.PUBLIC_URL + '/star.svg'} alt="logo" />
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    {/* description et equipements */}

                    <div className="card-fiche-description-equipements">
                        <div className="card-fiche-description">
                            <button className="card-fiche-description-button" onClick={() => setIsOpen(!isOpen)}>description</button>
                            <p className="card-fiche-description-text" style={{ display: isOpen ? "block" : "none" }}>{location.description}</p>
                        </div>
                        <div className="card-fiche-equipements">
                            <button className="card-fiche-equipements-button" onClick={() => setIsOpen(!isOpen)}>equipements</button>
                            <div className="card-fiche-equipements-text" style={{ display: isOpen ? "flex" : "none" }}>{location.equipments}</div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );

}