import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);
  return (
    <>
      <p>Users</p>
      {users
        ? users.map((user) => {
            return (
              <>
                <p> {user.name}</p>
                <p>{user.age}</p>
                <p>{user.active_hours}</p>
              </>
            );
          })
        : null}
    </>
  );
}
