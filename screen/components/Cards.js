import React from "react";

export default function Quicktrade(props) {
  return (
    <div
      className="col-5 m-2"
      style={{
        borderLeft: "2px solid " + props.border + "",
        borderRadius: "5px",
      }}
    >
      <div
        className="p-2"
        style={{
          background: props.active,
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        {/* Trade Short name */}
        <b className="fw-bold small-text">{props.topic}</b>
        <br />
        <small className="small-text">{props.lastrate}</small>
      </div>
      <div className="d-flex justify-content-between py-4 px-2 small-text">
        <div style={{ textAlign: "left" }}>
          <small>Home</small>
          <br />
          <small>{props.homeliveOod}</small>
        </div>
        <div style={{ textAlign: "right" }}>
          <small>Away</small>
          <br />
          <small>{props.awayliveOod}</small>
        </div>
      </div>

      {/* place */}
      <div className="d-flex justify-content-between">
        <div
          className="p-3 col-6 bg-dark text-white center fw-bold bi-graph-down-arrow cursor"
          style={{ height: "30px", borderBottomLeftRadius: "5px" }}
        ></div>
        <div
          className="p-3 col-6 text-white center fw-bold bi-graph-up-arrow cursor"
          style={{
            height: "30px",
            background: "rgb(164 0 0)",
            borderBottomRightRadius: "5px",
          }}
        ></div>
      </div>
    </div>
  );
}

// live third screen div
export function Live() {
  return (
    <div className="thirdNav-live bg-black my-3 rounded-3 center">
      <h4 className="text-white fw-bold">Live</h4>
    </div>
  );
}

// live table @ third nav
export function LiveTable() {
  return (
    <div className="y-scroll thirdNav-live-table livetable">
      <table class="table table-bordered text-white mb-5">
        <thead>
          <tr>
            <th scope="col">₦</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th scope="row">4</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td colspan="2" className="fw-bold">₦30,2735</td>
            <td>
              <div  className="input-group">
  <div className="input-group-prepend">
    <span className="col-1 text-white center">₦</span>
  </div>
  <input type="text" className="col-10 text-white center" placeholder="Amount (Nigeria Currency)" style={{background:'transparent', border:'0px solid transparent', outline:'none'}} />
  <div className="input-group-append center">
    <span className="col-3 text-white text-center">.00</span>
  </div>
  </div>
</td>
            <td className="cursor center fw-bold text-white bg-tomato">Place Order</td>
          </tr>
        </tbody>
    
      </table>
    </div>
  );
}

export function Category() {
  return (
    <div className="d-flex justify-content-between p-2 my-2 w-100 Snd-Nav-Quick-trade-category">
      {" "}
      <div
        className="active center shadow p-1 px-2 mx-2 small-text"
        style={{ borderRadius: "100px" }}
      >
        {" "}
        category{" "}
      </div> <div
        className="center shadow p-1 px-2 mx-2 small-text"
        style={{ borderRadius: "100px" }}
      >
        {" "}
        category{" "}
      </div> <div
        className="center shadow p-1 px-2 mx-2 small-text"
        style={{ borderRadius: "100px" }}
      >
        {" "}
        category{" "}
      </div> <div
        className="center shadow p-1 px-2 mx-2 small-text"
        style={{ borderRadius: "100px" }}
      >
        {" "}
        category{" "}
      </div> <div
        className="center shadow p-1 px-2 mx-2 small-text"
        style={{ borderRadius: "100px" }}
      >
        {" "}
        category{" "}
      </div>   {" "}
      </div>
  );
}
