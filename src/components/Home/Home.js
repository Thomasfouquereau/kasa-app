import React from 'react'
import { Link } from 'react-router-dom'
import './HomeStyle.css'
import ImgBackground from './IMG.png'
import Background from './Background.png'

export default function Home(props) {

    return (
        <main>
            <header className="App-header">
                <img className="header-background" src={Background} alt="logo" />
                <span className="header-text">Chez vous, partout et ailleurs</span>
                <img className="header-logo" src={ImgBackground} alt="logo" />
            </header>
            <main>
                <div className="container-home">
                    {/* recuperation des locations "images et titres" */}
                    {
                        props.locations && props.locations.map((item, index) => {
                            return (
                                <div className="card-home" key={item.id}>
                                    <Link to={`/Fiche-Logement/${item.id}`}>
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
        </main>
    );
}