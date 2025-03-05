import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const goToHome = () => {
    navigate("/");
  };

  const handleProfileNavigation = () => {
    navigate(`/user/${username}`);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">MyApp</div>
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white hover:text-gray-200" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-200" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-200" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-200" to="/user">
              User List
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded bg-white px-4 py-2 text-black"
          />
          <button
            onClick={handleProfileNavigation}
            className="rounded bg-white px-4 py-2 text-blue-500 hover:bg-gray-200"
          >
            Go to Profile
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
