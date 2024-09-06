import React from "react";

export default function Experience(props){
    
    return(
        <div className="location">
            <img  className="location-img"
            src={props.img}/>
            <div className="location-info">
                <div className="location-intro">
                    
                    <span className="material-symbols-outlined location-symbol">location_on</span>
                    <p className="country">{props.country}</p>
                    
                    <a href={`${props.googleMapsUrl}`} target="_blank"> View on Google Maps</a>
                </div>
                    <h1 className="header">{props.header}</h1>
                    <h3 className="date">{props.date}</h3>
                    <p className="description">{props.description}</p>  
            </div>
            
        </div>
        
    )
}