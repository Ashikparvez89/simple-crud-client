import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  return (
    <div>
      <div className="flex justify-center flex-col items-center min-h-screen border border-blue-300">
        <h1>This is update user from update profile for {loadedUser.name}</h1>
        <form className="space-y-3">
          <input
            type="text"
            name="name"
            defaultValue={loadedUser.name}
            className="input input-bordered input-primary w-72"
          />
          <br />
          <input
            type="email"
            name="email"
            defaultValue={loadedUser.email}
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
