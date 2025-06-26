import {Header, Content, Footer} from "./content";
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
        text={item.text} 
      />
    )
  });
  
  return(
    <>
      <Header />
      <section className="content"> {arr} </section>
      <Footer />
    </>
  ) 
};
