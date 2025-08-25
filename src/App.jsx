import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { GoStarFill } from "react-icons/go";
import deliverooLogo from "./assets/deliveroo-logo.svg"

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("site--backend-deliveroo--zcmn9mpggpg8.code.run");
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <header>
        <div>
          <div className="innerContainer">
            <img src={deliverooLogo} alt="logo deliveroo" className="logo" />
          </div>
        </div>
        <div className="flexContainer innerContainer">
          <div className="content">
            <h2>{data.restaurant.name}</h2>
            <div className="desc">{data.restaurant.description}</div>
          </div>
          <figure>
            <img src={data.restaurant.picture} alt="" />
          </figure>
        </div>
      </header>
      <main>
        <section id="categories" className="flexContainer innerContainer">
          {data.categories.slice(0, 5).map((cat, index) => {
            return (
              <div className="catContainer">
                <h2 key={index} className="">
                  {cat.name}
                </h2>
                <div className="flexContainer">
                  {cat.meals.slice(0, 6).map((meal, index) => {
                    return (
                      <article
                        key={index + meal}
                        className="meal flexContainer"
                      >
                        <div className="content">
                          <h3>{meal.title}</h3>
                          <p>{meal.description}</p>
                          <footer className="flexContainer">
                            <div>{meal.price} €</div>
                            <div className="popular">
                              {meal.popular && (
                                <div>
                                  <GoStarFill /> <span>Popular</span>
                                </div>
                              )}
                            </div>
                          </footer>
                        </div>
                        <figure>
                          <img src={meal.picture} alt="" />
                        </figure>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </main>
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
