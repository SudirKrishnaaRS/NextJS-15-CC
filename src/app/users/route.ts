// mimick a DB
export const users = [
  { id: 1, name: "Albert Doe" },
  { id: 2, name: "John Wick" },
];

// getUsers
export async function GET() {
  return Response.json(users);
}
