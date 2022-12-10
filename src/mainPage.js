import { Link } from "react-router-dom";
import { useGlobalContext } from "./providers/alert";

const MainPage = () => {
  const { handleAlert, MyNotification, loading } = useGlobalContext();

  MyNotification();
  return (
    <main className="container__navbar">
      <div className="header">
        <div className="nav__item">
          <span className="nav__itemLineone">Hello Guest</span>

          <Link to="/login" style={{ textDecoation: "none" }}>
            <span className="nav__itemLinetwo">Log In</span>
          </Link>
        </div>
      </div>
      <div id="demo"></div>

      <div>
        <button onClick={handleAlert}>Alert</button>
        <button onClick={loading}>Loading</button>
      </div>
      <div id="loader"></div>
    </main>
  );
};

export default MainPage;
