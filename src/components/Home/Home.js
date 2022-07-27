import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/data.json'
import './HomeStyle.css'

export default function Home() {
    return (
        <body>
            <header className="App-header">
                <img className="header-background" src={process.env.PUBLIC_URL + '/Background.png'} alt="logo" />
                <span className="header-text">Chez vous, partout et ailleurs</span>
                <img className="header-logo" src={process.env.PUBLIC_URL + '/IMG.png'} alt="logo" />
            </header>
            <main>
                <div className="container-home">
                    {
                        data && data.map((item, index) => {
                            return (
                                <div className="card-home" key={index.id}>
                                    <Link to={`/Fiche-Logement/id=${item.id}`}>
                                        <img className="card-home-img" src={item.cover} alt="logo" />
                                        <div className="card-home-text">
                                            <h1 className="card-home-title">{item.title}</h1>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </main>
        </body>
    );
}