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
