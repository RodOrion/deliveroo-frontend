import { GoStarFill } from "react-icons/go";

const shorterStr = (str) => {
  if (str.length > 70) {
    return str.slice(0, 70) + " ...";
  }
};

const Meal = ({ meal, index }) => {
  return (
    <article key={index + meal} className="meal flexContainer">
      <div className="content">
        <h3>{meal.title}</h3>
        <p>{shorterStr(meal.description)}</p>
        <footer className="flexContainer">
          <div>{meal.price} €</div>
          {meal.popular && (
            <div className="popular">
              <GoStarFill /> <span>Populaire</span>
            </div>
          )}
        </footer>
      </div>
      <figure>
        <img src={meal.picture} alt="" />
      </figure>
    </article>
  );
};
export default Meal;
