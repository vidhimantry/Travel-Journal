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
                {props.onRemove && (
                  <span
                    className="remove-trip-icon"
                    title="Remove trip"
                    onClick={() => props.onRemove(props.id)}
                    style={{ cursor: "pointer", alignSelf: "flex-end", marginTop: "1rem" }}
                  >
                   
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M3 6h18" stroke="#d04242" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#d04242" strokeWidth="2"/>
                      <rect x="5" y="6" width="14" height="14" rx="2" stroke="#d04242" strokeWidth="2"/>
                      <path d="M10 11v6M14 11v6" stroke="#d04242" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </span>
                )}
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