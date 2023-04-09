import React from "react"
import {useParams, useNavigate} from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag"
import Collapsible from "../../components/Collapsible/Collapsible"
import StarRating from "../../components/StarRating/StarRating"
import Host from "../../components/Host/Host"
import Loader from "../../components/Loader/Loader"
import { UseGetListingById } from "../../services/Services";
import { paragraph, list } from "../../assets/utils/Constants";
import "./FicheLogement.css"

export default function FicheLogement() {  
    const navigate = useNavigate()
    const params = useParams()
    const {listingById, isLoading, error} = UseGetListingById(params)

    // destructuring listingById and proving a fallback "|| {}" if undefined
    const {title, location, tags, rating, host, description, equipments} = listingById || {}

    React.useEffect(() => {
        async function navigateToNotFound() {
            try {
                if (isLoading) {
                    return <Loader />
                }
            }

        finally {
            if (!listingById){
                navigate("/not-found")
            }
        }
        }
        navigateToNotFound()
    }, [listingById, isLoading, navigate])

    if(error) {
        return <span>Problème de connexion au serveur...</span>
    } else if (isLoading) {
        return <Loader />
    } else {
        return ( 
            <section className="main">
                
                <Carrousel 
                    listing={listingById}
                />
    
                <div className="listing--content">
                    <div className="listing--content-wrapper">
                        <div className="listing--wrapper-left">
                            <div className="listing--heading">
                                <h1>{title}</h1>
                                <h2>{location}</h2>
                            </div>
                            <Tag 
                                tags={tags}
                            />
                        </div>
    
                        <div className="listing--wrapper-right">
                            <StarRating 
                                rating={rating}
                            />
                            <Host 
                                host={host}
                            />
                        </div>
                    </div>
                    <div className="collapsible-container">
                        <Collapsible 
                            type={paragraph}
                            title="Description"
                            description={description}
                            equipments={null}
                        />
    
                        <Collapsible 
                            type={list}
                            title="Equipements"
                            description={null}
                            equipments={equipments}
                        />
                    </div>
                </div>
            </section>
        )
    }
}
