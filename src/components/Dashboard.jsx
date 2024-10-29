import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <nav className="dashboard">
      <Link to="/articles">
        <button className="btn">Articles</button>
      </Link>
    </nav>
  );
};

export default Dashboard;
