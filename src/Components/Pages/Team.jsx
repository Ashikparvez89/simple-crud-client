import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Team = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser)
  const handleclick = (_id) => {
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("user deleted", data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const remaining = users.filter(user => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <div className="">
        <h1>User = {loadedUser.length}</h1>

        <div className="">
          {loadedUser.map((content, _id) => (
            <div
              className="border-red-300 w-full border py-2 my-2 text-xl"
              content="content"
              key={_id}
            >
              <p className="text-blue-800 font-semibold">Name : {content.name}</p>
              <p className="text-black font-semibold my-2">Email : {content.email}</p>
              <p className="text-red-600"> id : {content._id}</p>
              <Link className="btn btn-secondary my-3" to={`/update/${content._id}`}>Update Profile</Link>
              <br />
              <button
                onClick={() => handleclick(content._id)}
                className="btn btn-warning"
              >
                Delete User
              </button>
            </div>
          ))}
        </div>
      </div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            Our team
          </h1>
          <p className="max-w-2xl text-center dark:text-gray-600">
            At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
            quam natus quis nihil quod, hic explicabo doloribus magnam neque,
            exercitationem eius sunt!
          </p>
          <div className="flex flex-row flex-wrap-reverse justify-center">
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?0"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-600">Visual Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?1"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-600">Visual Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?2"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-600">Visual Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?3"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-600">Visual Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?4"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-600">Visual Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?5"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-600">Visual Designer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
