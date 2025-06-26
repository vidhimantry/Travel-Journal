import loc from "./images/marker.png";
import globe from "./images/globe.png";

export function Header(){
  return(
    <header className="header">
      <img src= {globe} alt="globe-icon" />
      <h1> my travel journal.</h1>
    </header>
  );
}

export function Content(props) {
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

export function Footer() {
    return (
        <footer className="footer">
            Made with <span style={{color: "white"}}>&hearts;</span> by Vidhi Mantry
        </footer>
    );
}