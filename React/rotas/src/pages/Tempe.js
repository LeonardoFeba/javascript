import { Link } from "react-router-dom";

const Tempe = () => {
  return (
    <div>
      <h2>Temperature :D</h2>
      <ul>
        <li>
          <Link to="/maps">Mapas</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Tempe;
