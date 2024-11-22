import { revalidatePath } from "next/cache";

type MockUser = {
  id: number;
  name: string;
};

const MockUsers = async () => {
  // Data fetching in Server Component
  // Here we fetch the users
  const response = await fetch(
    "https://67402466d0b59228b7eece0e.mockapi.io/users"
  );
  const users = await response.json();

  // Server Action
  const addUser = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const res = await fetch(
      "https://67402466d0b59228b7eece0e.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    revalidatePath("/mock-users"); // revalidate the path to view the newly added user without reload
    // Below is just for logging
    const newUser = await res.json();
    console.log(newUser); // logged in the terminal not in console
  };

  return (
    <div className="p-10">
      <form action={addUser} className="my-4">
        <input
          type="text"
          name="name"
          placeholder="enter user's name to be added"
          required
          className="rounded border p-2 mr-2 text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add user
        </button>
      </form>
      <div className="grid grid-cols-4 gap-4 py-10">
        {users.map((user: MockUser) => (
          <div
            className="p-4 bg-white shadow-sm rounded-lg text-gray-700"
            key={user.id}
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockUsers;
