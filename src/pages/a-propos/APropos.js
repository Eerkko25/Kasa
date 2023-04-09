import React from "react";
import "./APropos.css"
import Hero from "../../components/Hero/Hero";
import Collapsible from "../../components/Collapsible/Collapsible"
import headerImage from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import { paragraph } from "../../assets/utils/Constants";

export default function APropos() {
    return (
        <section className="a-propos">
            <Hero 
                image={headerImage}
                title={null}
            />
            
            <Collapsible 
                type={paragraph}
                title="Fiabilité" 
                description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            />

            <Collapsible 
                type={paragraph}
                title="Respect" 
                description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />

            <Collapsible 
                type={paragraph}
                title="Service" 
                description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            />

            <Collapsible 
                type={paragraph}
                title="Sécurité" 
                description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
        </section>
    )
}