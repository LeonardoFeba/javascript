import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home :D</h2>
      <ul>
        <li>
          <Link to="/tempe">Temperature</Link>
        </li>
        <li>
          <Link to="/maps">Mapas</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
