import React from "react";

export default function SideNav() {
  const NavImg = "https://picsum.photos/id/237/200/300";
  return (
    <div className="side--Nav col-12">
      {/* sideNav logo and more link*/}
      <div className="side--Nav-first-child center start py-2">
        <div className="side-nav-logo bi-microsoft-teams center fw-bold"></div>
        <div className="side-nav-running bi-graph-up-arrow center fw-bold"></div>
        <div className="side-nav-icons bi-wallet2 center fw-bold"></div>
        <div className="side-nav-icons bi-chat-quote center fw-bold"></div>
        <div className="side-nav-icons bi-dice-6 center fw-bold"></div>
        <div className="side-nav-icons bi-three-dots center fw-bold"></div>
      </div>

      {/* sideNav profile and setting */}
      <div className="side--Nav-last-child end flex column center">
        <div className="side-nav-icons bi-gear-fill center fw-bold"></div>
        <img
          src={NavImg}
          className="side--Nav-last-child-img"
          alt="userimage"
        ></img>
      </div>
    </div>
  );
}
