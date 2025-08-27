//import { useState, useEffect } from "react";
import ItemPanier from "./ItemPanier";

const Panier = ({ panier, setPanier }) => {
  // const [total, setTotal] = useState(0);
  const frais = 2.50;

  const updateQty = (operator, index) => {
    const newPanier = [...panier];

    if (operator === "+") {
      // ajoute une quantité
      newPanier[index].qty = panier[index].qty + 1;
    } else {
      newPanier[index].qty = panier[index].qty - 1;
    }
    setPanier(newPanier);
  };

    const calculTotal = () => {
      let totalCalc = 0;
      for (let i = 0; i < panier.length; i++) {
        totalCalc += Number(panier[i].price) * panier[i].qty;
      }
      return totalCalc
    };


  return panier.length > 0 ? (
    <aside id="panier">
      <header>Valider mon panier</header>
      <div className="content">
        <ul>
          {panier.map((item, index) => {
            return (
              <ItemPanier
                key={item + index}
                index={index}
                item={item}
                updateQty={updateQty}
              />
            );
          })}
        </ul>
        <div className="ssTotal flexContainer">
          <span>Sous total</span> <span>{(calculTotal()).toFixed(2)}€</span>
        </div>
        <div className="frais flexContainer">
          <span>Frais de livraison</span> <span>{frais.toFixed(2)}€</span>
        </div>
      </div>
      <footer className="flexContainer">
        <span>TOTAL</span>
        <span className="total">{(calculTotal() + frais).toFixed(2)}€</span>
      </footer>
    </aside>
  ) : (
    <aside id="panier">
      <header>Ajouter à mon panier</header>
      <ul>
        <li>Pas de produit</li>
      </ul>
    </aside>
  );
};
export default Panier;
