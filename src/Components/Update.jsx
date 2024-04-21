import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    console.log(name, email);
    const updateduser = { name, email };
    fetch(`http://localhost:5000/user/${loadedUser._id}`,{
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateduser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('user updated', data);
      });
  };
  return (
    <div>
      <div className="flex justify-center flex-col items-center min-h-screen border border-blue-300">
        <h1>This is update user from update profile for {loadedUser.name}</h1>
        <form onSubmit={handleUpdate} className="space-y-3">
          <input
            type="text"
            name="name"
            // defaultValue={loadedUser.name}
            className="input input-bordered input-primary w-72"
          />
          <br />
          <input
            type="email"
            name="email"
            // defaultValue={loadedUser.email}
            className="input input-bordered input-primary w-72"
          />
          <br />
          <button type="submit" className="btn btn-secondary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
