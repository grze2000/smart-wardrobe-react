import { User } from "../interfaces/User"

let users: User[] = [
  {
    "id": 12345,
    "email": "jkowalski@gmail.com",
    "roles": ["ADMIN", "USER"],
    "firstName": "Jan",
    "lastName": "Kowalski",
    "password": "password123"
  }
]
  const usersFromLocalStorage = localStorage.getItem('users')
if (usersFromLocalStorage) {
  users = JSON.parse(usersFromLocalStorage)
}

export { users }
