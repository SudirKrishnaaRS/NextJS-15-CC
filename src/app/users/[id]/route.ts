import { users } from "../route";

type ParamsType = {
  params: {
    id: string;
  };
};

// GET - getUserById
export async function GET(_request: Request, { params }: ParamsType) {
  // Get the `id` of the user from the URL
  const { id } = await params;
  // Find the user which matches the `id`
  const user = users.find((user) => user.id === parseInt(id));
  // Return the found user
  return Response.json(user);
}

// HINT: Own Implementation
// PATCH - editUserbyId
export async function PATCH(request: Request, { params }: ParamsType) {
  const patchUser = await request.json();
  // Get the `id` of the user from the URL
  const { id } = await params;
  // Find the user which matches the `id`
  const user = users.find((user) => user.id === parseInt(id));
  // If the user is found, update their name if provided
  if (user && patchUser.name) {
    user.name = patchUser.name;
  }
  // Return the found user
  return Response.json(user);
}

// HINT: Own Implementation
// DELETE - deleteUserById
export async function DELETE(_request: Request, { params }: ParamsType) {
  // Get the `id` of the user from the URL
  const { id } = await params;

  // Find the index of the user with the specified `id`
  const indexToDelete = users.findIndex((user) => user.id === parseInt(id));

  // If a matching user is found, remove it
  if (indexToDelete !== -1) {
    //SYNTAX: splice(indexToDelete, deleteElementCount)
    users.splice(indexToDelete, 1);
  }
  // Return a response confirming deletion
  return Response.json({ message: "User deleted successfully" });
}
