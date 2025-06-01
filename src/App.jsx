import globe from "./images/globe.png";
import Content from "./content";
import Data from "./data";
export default function App(){
  const arr = Data.map(item => {
    return(
      <Content 
        key={item.id}
        img={item.img}
        title={item.title}
        country={item.country}
        googleMapsLink={item.googleMapsLink}
        dates={item.dates}
        text={item.text} //m2: using entry = {entry}, then change props.entry.
        //m3: use {...entry} then props.img etc will work
      />
    )
  });
  return(
    <>
      <Header />
      <section className="content">
        {arr}
      </section>
    </>
  ) 
}
function Header(){
  return(
    <header className="header">
      <img src= {globe} alt="globe-icon" />
      <h1> my travel journal.</h1>
    </header>
  )
}
