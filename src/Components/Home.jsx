import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Team from "./Pages/Team";
import About from "./Pages/About";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  return (
    <>
      <Login></Login>
      <Team></Team>
      <Register></Register>
      <About></About>
    </>
  );
};

export default Home;
