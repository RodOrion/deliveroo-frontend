import Meal from "./Meal";

const Section = ({ infos, addPanier }) => {
    
  return (
    <section id="categories" className="flexContainer">
        
      {infos.slice(0, 5).map((cat, index) => {
        return (
          <div key={index + cat} className="catContainer">
            <h2>{cat.name}</h2>
            <div className="flexContainer">
              {cat.meals.slice(0, 6).map((meal, index) => {
                return (
                  <Meal key={index + meal} meal={meal} addPanier={addPanier} />
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Section;
