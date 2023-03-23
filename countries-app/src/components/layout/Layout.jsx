import React from "react";
import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      <div className=" bg-slate-50">{props.children}</div>
    </>
  );
}
