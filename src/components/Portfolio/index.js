import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import portfolioImage from '../../assets/images/portfolio.jpg'
import portfolioImage2 from '../../assets/images/portfolio2.jpg'


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);


        clearTimeout(timer);

    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio-e15e5'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">

                {
                    portfolio.map((port, idx) => {
                        return (

                            <div className="image-box" key={idx}>

                                <img
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (

        <>
            <div className="container portfolio-page">

                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <a href="https://www.youtube.com/watch?v=ocMdsdF_EbI&t=2s" rel="noreferrer" target={"_blank"} style={{ textDecoration: "none" }}>
                    <p className="title" style={{ alignContent: "center", marginLeft: "60px", fontFamily: "monospace", fontSize: "22px" }}> Implementació de algoritmo de cifrado Asimétrico </p>
                    <img src={portfolioImage} className="portfolio-image" width={350} style={{ paddingLeft: "60px" }} alt="Imgen de portfoio " />
                </a>
                <a href="https://www.youtube.com/watch?v=sNuav2qXbw4&t=549s " rel="noreferrer" target={"_blank"} style={{ textDecoration: "none" }}>
                    <p className="title" style={{ marginLeft: "60px", fontFamily: "monospace", fontSize: "22px" }}> Aplicación Web Python+Flask+MongoDB+Angular</p>
                    <img src={portfolioImage2} className="portfolio-image" width={350} style={{ paddingLeft: "60px" }} alt="Imgen de portfoio 2" />
                </a>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;