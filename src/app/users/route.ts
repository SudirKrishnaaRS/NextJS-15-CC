// mimick a DB
export const users = [
  { id: 1, name: "Albert Doe" },
  { id: 2, name: "John Wick" },
];

// GET - getUsers
export async function GET() {
  return Response.json(users);
}

// addUser
export async function POST(request: Request) {
  // This is what we send from the Postman or ThunderClient body
  const user = await request.json();

  // Here we use the details sent from the postman and make a new user object
  // which is to be added to the user array
  const newUser = {
    id: users.length + 1,
    name: user.name,
  };

  // Adding to the user array
  users.push(newUser);

  // Returning a confirmation with status code 201 (meaning the user
  // resource has been created)
  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-type": "application/json",
    },
    status: 201,
  });
}
