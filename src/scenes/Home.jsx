import React from "react";
import { Link } from "react-router-dom";

import Menu from "../components/Menu";
import Categories from "../components/Categories";

function Home() {
  return (
    <>
    <Menu/>
    <Categories/>
    </>
  );
}

export default Home;