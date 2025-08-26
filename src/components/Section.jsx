import Meal from "./Meal";

const Section = ({ infos }) => {
  return (
    <section id="categories" className="flexContainer">
      {infos.slice(0, 5).map((cat, index) => {
        return (
          <div key={index + cat} className="catContainer">
            <h2>{cat.name}</h2>
            <div className="flexContainer">
              {cat.meals.slice(0, 6).map((meal, index) => {
                return (
                  <Meal index={index} meal={meal} />
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
