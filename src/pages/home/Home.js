import React from "react";
import "./Home.css"
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import headerImage from "../../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
import {UseGetListings} from "../../services/Services"

export default function Home() {
    const {listings, isLoading, error} = UseGetListings()
    const cards = listings.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    if(error) {
        return <span>Problème de connexion au serveur...</span>
    } else if(listings) {
        return (
            <section>
                <section>
                    <Hero 
                    image={headerImage}
                    title="Chez vous, partout et ailleurs"
                    />
                </section>
                <section className="home">
                    {isLoading ? <Loader /> : cards}
                </section>
            </section>
        )
    }
}