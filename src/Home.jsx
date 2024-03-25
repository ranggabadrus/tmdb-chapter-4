import React from "react";
import { Link } from "react-router-dom/dist";

export default function Home() {
  return (
    <div>
      Ini adalah Homepage
      <Link to={"/detail"}> detail</Link>
      <div>search</div>
    </div>
  );
}
