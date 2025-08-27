import { useState, useEffect } from "react";
import ItemPanier from "./ItemPanier";

const Panier = ({ panier, setPanier }) => {
  const [total, setTotal] = useState(0);
  const frais = 2.5;

  const updateQty = (operator, index, price, priceFirst) => {
    const newPanier = [...panier];

    if (operator === "+") {
      // ajoute une quantité
      newPanier[index].qty = panier[index].qty + 1;
      // multiplie le price si pas === 0
      if (price !== 0) {
        newPanier[index].price = panier[index].qty * priceFirst;
      } else {
        newPanier[index].price = priceFirst;
      }
    } else {
      newPanier[index].qty = panier[index].qty - 1;
      if (newPanier[index].qty !== 0) {
        newPanier[index].price = Number(panier[index].qty) * priceFirst;
      } else {
        newPanier[index].price = 0;
      }
    }

    setPanier(newPanier);
  };

  useEffect(() => {
    const calculTotal = () => {
      let totalCalc = 0;
      for (let i = 0; i < panier.length; i++) {
        totalCalc += Number(panier[i].price);
      }
      setTotal(totalCalc);
    };
    calculTotal();
  }, [panier]);

  return (
    <aside id="panier">
      <header>Valider mon panier</header>
      <div className="content">
        <ul>
          {panier.length > 0 ? (
            panier.map((item, index) => {
              return (
                <ItemPanier
                  key={item + index}
                  index={index}
                  item={item}
                  updateQty={updateQty}
                />
              );
            })
          ) : (
            <li>Pas de produit</li>
          )}
        </ul>
        <div className="ssTotal flexContainer">
          <span>Sous total</span> <span>{total}€</span>
        </div>
        <div className="frais flexContainer">
          <span>Frais de livraison</span> <span>{frais}€</span>
        </div>
      </div>
      <footer className="flexContainer">
        <span>TOTAL</span>
        <span className="total">{total + frais}€</span>
      </footer>
    </aside>
  );
};
export default Panier;
