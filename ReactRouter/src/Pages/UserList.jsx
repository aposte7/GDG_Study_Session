import { Link } from "react-router-dom";
import { users } from "../../data/users";

const UserList = () => {
  const colors = ["bg-red-500", "bg-green-500", "bg-blue-500"];

  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="mt-4 text-2xl">User List</h2>
      <ul className="mt-2">
        {users.map((user, index) => (
          <li
            key={user.username}
            className="mt-2 flex items-center justify-center"
          >
            <div
              className={`h-12 w-12 rounded-full ${colors[index % colors.length]} mr-4 flex items-center justify-center text-white`}
            >
              {user.name.charAt(0)}
            </div>
            <Link to={`/user/${user.username}`} className="text-blue-500">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
