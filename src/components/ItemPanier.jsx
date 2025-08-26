const ItemPanier = ({ item, index, updateQty }) => {
  //const increment = ()

  return (
    <li className="flexContainer">
      <div className="buttons">
        <button
          onClick={() => {
            updateQty("-", index, item.price, item.priceFirst);
          }}
          disabled={item.qty === 0}
        >
          -
        </button>
        <span className="value">{item.qty}</span>
        <button
          onClick={() => {
            updateQty("+", index, item.price, item.priceFirst);
          }}
        >
          +
        </button>
      </div>
      <div className="title">{item.title}</div>
      <div className="price">{item.price}€</div>
    </li>
  );
};
export default ItemPanier;
