import deliverooLogo from "../assets/deliveroo-logo.svg";
const Header = ({ infos }) => {
  return (
    <header>
      <div>
        <div className="innerContainer">
          <img src={deliverooLogo} alt="logo deliveroo" className="logo" />
        </div>
      </div>
      <div className="flexContainer innerContainer">
        <div className="content">
          <h2>{infos.name}</h2>
          <div className="desc">{infos.description}</div>
        </div>
        <figure>
          <img src={infos.picture} alt="" />
        </figure>
      </div>
    </header>
  );
};
export default Header;
