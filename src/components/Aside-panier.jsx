const Panier = ({panier}) => {
    
    return (
        <aside id="panier">
            <header>Valider mon panier</header>
            <div className="content">
                <ul>
                    <li className="flexContainer">
                        <div>
                            <button>-</button>
                            <span className="value">1</span>
                            <button>+</button>
                        </div>
                        <div className="title">{panier.title}</div>
                        <div className="price">24.50€</div>
                    </li>
                </ul>
                <div className="ssTotal flexContainer"><span>Sous total</span> <span>24.50€</span></div>
                <div className="frais flexContainer"><span>Frais de livraison</span> <span>2.50€</span></div>
            </div>
            <footer className="flexContainer">
                <span>TOTAL</span>
                <span className="total">26.50€</span>
            </footer>
        </aside>
    )
}
export default Panier