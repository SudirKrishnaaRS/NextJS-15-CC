type User = {
  id: number;
  name: string;
  usernames: string;
  email: string;
  phone: string;
};

// Data fetching in Server Components
const UsersServer = async () => {
  const response = await fetch("https://jsonplaceholderr.typicode.com/users");
  const users = await response.json();

  return (
    <ul className="space-y-4 p-4">
      {users.map((user: User) => (
        <li
          className="p-4 bg-white shadow-sm rounded-lg text-gray-700"
          key={user.id}
        >
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UsersServer;
