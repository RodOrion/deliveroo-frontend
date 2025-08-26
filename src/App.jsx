import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import deliverooLogo from "./assets/deliveroo-logo.svg";
import Header from "./components/Header";
import Section from "./components/Section";
import Panier from "./components/Aside-panier";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [originAPI, setOriginAPI] = useState(false);
  
  const url = originAPI
    ? "https://site--backend-deliveroo--zcmn9mpggpg8.code.run/api_deliveroo"
    : "https://site--backend-deliveroo--zcmn9mpggpg8.code.run/restos";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url); // https://site--backend-deliveroo--zcmn9mpggpg8.code.run/restos

        //console.log('🔄 URL changed to:', url);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [url]);

  //console.log("URL ? :"+url);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <button
        className="origin"
        onClick={() => {
          setOriginAPI((prev) => !prev); // !originAPI
        }}
      >
        {originAPI ? "NO API" : "API"}
      </button>
      {originAPI ? (
        <>
          <header>
            <div>
              <div className="innerContainer">
                <img
                  src={deliverooLogo}
                  alt="logo deliveroo"
                  className="logo"
                />
              </div>
            </div>
            <div className="flexContainer innerContainer">
              <div className="content">
                <h2>{data.header.title}</h2>
                <div className="address">
                  {data.meta.restaurant.location.address.address1}
                </div>
                <a href={data.meta.restaurant.links.self.href}>Link</a>
              </div>
              <figure>
                <img
                  src={data.header.image.url}
                  alt={data.header.image.altText}
                />
              </figure>
            </div>
          </header>
          <nav>
            <ul className="flexContainer innerContainer">
              {data.meta.categories.map((cat) => {
                return (
                  <li key={cat.id}>
                    <a href={cat.id}>{cat.name}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* <section id="populaires">
            <div className="flexContainer">

              {Object.values(data.items).map((item) => {
                return (

                      <figcaption>{item}</figcaption>

                );
              })}
            </div>
          </section> */}
        </>
      ) : (
        <>
          <Header infos={data.restaurant} />
          <main className="flexContainer innerContainer">
            <Section infos={data.categories} />
            <Panier />
          </main>
        </>
      )}

      <footer>
        <div className="innerContainer">
          <p>
            Made with <b>React</b> at <b>Le Reacteur</b> by <b>Rodolphe</b>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
