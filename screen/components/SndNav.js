import React from "react";
import Quicktrade from "./Cards";
import { Category } from "./Cards";

export default function SndNav() {
  return (
    <div className="col-12 sndNav p-3">
      <h4 className="fw-bold my-2">Trade</h4>
      <Category />
      <div className="d-flex align-items-center justify-content-between">
        <input
          type="text"
          className="text-white p-2 col-lg-9"
          placeholder="Search Bet Trade"
          style={{
            background: "black",
            border: "0px solid transparent",
            outline: "none",
            borderRadius: "3px",
          }}
        ></input>
        <div
          className="bg-dark p-2 fw-bold center rounded-2 text-white bi-search "
          style={{ width: "40px", height: "40px" }}
        ></div>
      </div>
      <br />
      <div className="d-flex flex-wrap Snd-Nav-Quick-trade justify-content-between">
        <Quicktrade
          active="rgb(164 0 0)"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
          border="rgb(164 0 0)"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <Quicktrade
          active="rgb(33,37,41)"
          border="transparent"
          topic="Liverpool Vs chelsea"
          lastrate="#21,000"
          homeliveOod="#41,000"
          awayliveOod="#2000"
        />
        <br />
        <div className="col-12 p-4 center bi-three-dots text-white fw-bold"></div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
