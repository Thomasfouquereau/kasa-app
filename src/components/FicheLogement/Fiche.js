import React from "react";
import data from '../../data/data.json'

let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id);

export default function Fiche() {
   
    return (
        <body>
            <div className="container-fiche">
                {
                    data && data.map((item, index) => {

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
                                        

                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </body>
    );
}