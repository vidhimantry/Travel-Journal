import loc from "./images/marker.png";

export default function Content(props) {
    return (
        <article className="card">
            <img className="card-image" src={props.img.src} alt={props.img.alt} />
            <div className="card-content">
                <div className="card-location-row">
                    <img src={loc} alt="marker" className="marker-icon" />
                    <span className="card-country">{props.country}</span>
                    <a 
                        href={props.googleMapsLink} 
                        className="google-maps-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    > View on Google Maps
                    </a>
                </div>
                <div className="card-title">{props.title}</div>
                <div className="card-dates">{props.dates}</div>
                <div className="card-description">{props.text}</div>
            </div>
        </article>
    );
}