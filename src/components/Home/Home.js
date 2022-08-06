import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './HomeStyle.css'

export default function Home(props) {


    return (
        <main>
            <header className="App-header">
                <img className="header-background" src={process.env.PUBLIC_URL + '/Background.png'} alt="logo" />
                <span className="header-text">Chez vous, partout et ailleurs</span>
                <img className="header-logo" src={process.env.PUBLIC_URL + '/IMG.png'} alt="logo" />
            </header>
            <main>
                <div className="container-home">
                    {
                        props.locations && props.locations.map((item, index) => {
                            return (
                                <div className="card-home" key={index.id}>
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