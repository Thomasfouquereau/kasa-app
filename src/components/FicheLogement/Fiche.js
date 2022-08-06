import React from "react";
import {useParams} from "react-router-dom";
import './FicheLogementStyle.css'

export default function Fiche(props) {

    const {id} = useParams()
    console.log(id)

    return (
        <main>
            <div className="container-fiche">
                {
                    props.locations && props.locations.map((item, index) => {

                        return (
                            <div className="card-fiche" key={index.id}>
                                {
                                    item.pictures.map((item, index) => {
                                        return (
                                            <img className="card-fiche-img" key={index.id} src={item} alt="logo" />
                                        )
                                    }
                                    )
                                }
                                <div className="card-fiche-text">
                                    <h1 className="card-fiche-title">{item.title}</h1>
                                    <span className="card-fiche-location">{item.location}</span>
                                    <div className="card-fiche-tags">
                                        {
                                            item.tags.map((tag, index) => {
                                                return (
                                                    <span className="card-fiche-tag" key={index.id}>{tag}</span>
                                                )
                                            }
                                            )
                                        }
                                    </div>

                                    {/* {
                                        item && item.host.map((item, index) => {
                                            return (
                                                <div className="card-fiche-host" key={index.id}>
                                                    <img className="card-fiche-host-img" src={item.picture} alt="logo" />
                                                    <span className="card-fiche-host-name">{item.name}</span>
                                                </div>
                                            )
                                        }
                                        )
                                    } */}

                                </div>
                            </div>
                        )
                    }
                    )
                }

            </div>
        </main>
    );
}