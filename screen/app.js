import React from "react";
import Sidenav from "./components/SideNav";
import ThirdNav from "./components/ThirdNav";
import SndNav from "./components/SndNav";

export default function App() {
  return (
    <div className="body--all flex">
      <Sidenav />

      <SndNav />

      <ThirdNav />
    </div>
  );
}
