import React from "react";
import { Link } from "react-router-dom";

import LatestMenu from "../components/LatestMenu";
import Categories from "../components/LatestCategories";

function Home() {
  return (
    <>
    <LatestMenu/>
    <Categories/>
    </>
  );
}

export default Home;