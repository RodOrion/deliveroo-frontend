const ItemPanier = ({ item, index, updateQty }) => {

  return (
    <li className="flexContainer">
      <div className="buttons">
        <button
          onClick={() => {
            updateQty("-", index);
          }}
          disabled={item.qty === 0}
        >
          -
        </button>
        <span className="value">{item.qty}</span>
        <button
          onClick={() => {
            updateQty("+", index);
          }}
        >
          +
        </button>
      </div>
      <div className="title">{item.title}</div>
      <div className="price">{(item.price*item.qty).toFixed(2)}€</div>
    </li>
  );
};
export default ItemPanier;
