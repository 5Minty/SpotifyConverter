import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const { id } = router.query; //router getting {id}
  const [name, setName] = useState();

  // GET request to get a user
  useEffect(() => {
    // wait for the useRouter hook to asynchronously get the query id
    if (!id) {
      return;
    }

    const fetchUser = async () => {
      //async function means it's going on somewhere else, not in this file
      const response = await fetch(`/api/names/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const user = await response.json(); //json is where api info stored
      setName(user?.name);
    };

    fetchUser();
  }, [id]);

  const onSubmit = async (e) => {
    //e is data that changes on input
    e.preventDefault();
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("POST: ", data);
  };

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name ?? ""} //idk what this means. Value is name or "" if undef?
            onChange={(e) => setName(e.target.value)} //updates e on change of input
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
