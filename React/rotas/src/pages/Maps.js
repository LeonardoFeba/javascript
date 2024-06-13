import { Link } from "react-router-dom";

const Maps = () => {
  return (
    <div>
      <h2>Maps :D</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tempe">Temperature</Link>
        </li>
      </ul>
    </div>
  );
};

export default Maps;
