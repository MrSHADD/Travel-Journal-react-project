import React from "react"

export default function Destination(props){
    return(
        <div className="div--main">
            <img src={`../images/${props.item.imageUrl}`} className="div--img"/>

         <div className="details">
            <div className="div--location">
                <img src="./images/location.png" className="div--point"/>
                <h3 className="div--country">{props.item.location}</h3>
               <url className="div--map"><a href={props.item.googleMapsUrl}>View on Google Maps</a></url>
            </div>

            <h1 className="div--title">{props.item.title}</h1>
            
            

            <div className="div--date">
               <h4 className="div--sdate">{props.item.startDate}</h4>
               <h4 className="tag">-</h4>
               <h4 className="div--edate">{props.item.endDate}</h4>
            </div>
            
            <p className="div--des">{props.item.description}</p>
            
          </div>
          
        </div>
        
    )
}