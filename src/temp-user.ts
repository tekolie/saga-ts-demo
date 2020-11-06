import { addIsPending, formatName, addOne } from "./temp";

type User = { id: number; name: string };

function demo() {
  const demoUser: User = { id: 1, name: "test" }

  const formattedUser = addIsPending<User>(demoUser)
}