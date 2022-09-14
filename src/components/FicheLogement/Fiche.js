import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './FicheLogementStyle.css'
import RatingStar from "./ratingStar";
import DropDown from "../DropDown/DropDown"
import RightArrow from "./rightArrow.svg"
import LeftArrow from "./leftArrow.svg"

export default function Fiche(props) {
    const { id } = useParams()
    const navigate = useNavigate()
    const location = props.locations.find(item => item.id === id)
    const [currImg, setCurrImg] = useState(0);

    useEffect(() => {
        if (props.locations.length > 0) {
            if (!location) {

                navigate("/404")
            }
        }

    }, [props.locations, navigate, location])

    if (!location) {
        return null
    }

    function PreviousImg() {
        if ((currImg - 1) < 0) return setCurrImg(location.pictures.length - 1)
        return setCurrImg(currImg - 1)
    }
    function NextImg() {
        if ((currImg + 1) < location.pictures.length) return setCurrImg(location.pictures.length - 1)
        return setCurrImg(currImg - 1)
    }

    function HideArrow() {
        if (location.pictures.length === 1)
            return "none"
    }

    console.log(HideArrow)

    return (
        <main>
            <div className="container-fiche">
                <div className="card-fiche">

                    {/* carrousel de photos */}

                    <div className="card-fiche-carrousel">
                        <button className="card-fiche-carrousel-button-left" style={{ display: HideArrow()}} onClick={PreviousImg}><img className="left-arrow" src={LeftArrow} alt="logo" /></button>
                        <img className="card-fiche-carrousel-img" src={location.pictures[currImg]} alt="logo" />
                        <button className="card-fiche-carrousel-button-right" style={{ display: HideArrow() }} onClick={NextImg}><img className="right-arrow" src={RightArrow} alt="logo" /></button>
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

                                <RatingStar rating={location.rating} />

                            </div>
                        </div>
                    </div>

                    {/* description et equipements */}

                    <div className="card-fiche-description-equipements">
                        <div className="card-fiche-description">
                            <DropDown title='Description'>
                                <p className="card-fiche-description-text">{location.description}</p>
                            </DropDown>
                        </div>
                        <div className="card-fiche-equipements">
                            <div className="card-fiche-equipements-text">
                                <DropDown title='Equipments'>
                                    <ul>
                                        {
                                            location.equipments.map((item, index) => {
                                                return (
                                                    <li key={index}>{item}</li>
                                                )
                                            }
                                            )
                                        }
                                    </ul>
                                </DropDown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}