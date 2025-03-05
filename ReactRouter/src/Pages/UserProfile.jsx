import { useParams } from "react-router-dom";
import { users } from "../../data/users";

const UserProfile = () => {
  const { username } = useParams();
  const user = users.find((user) => user.username === username);

  if (!user) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold">User not found</h1>
      </div>
    );
  }

  const colors = ["bg-red-500", "bg-green-500", "bg-blue-500"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="container mx-auto p-4 text-center">
      <div
        className={`h-24 w-24 rounded-full ${color} mx-auto flex items-center justify-center text-3xl text-white`}
      >
        {user.name.charAt(0)}
      </div>
      <h1 className="mt-4 text-3xl font-bold">User Profile: {user.name}</h1>
      <p className="mt-2">Username: {user.username}</p>
      <p className="mt-2">Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
