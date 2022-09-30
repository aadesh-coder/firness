import React from "react";

export default function App() {
  const navbar = () => (
    <div>
      <div style={{ background: "black", height: "50px" }}></div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container">
          <div className="row" style={{ textAlign: "center", width: "100%" }}>
            <div
              className="col-lg-3"
              style={{ fontSize: "30px", textAlign: "left" }}
            >
              <i class="fa-solid fa-circle-exclamation"></i>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-video"></i>
                  <br />
                  <span>Live</span>
                </div>
                <div className="col-3">
                  <i class="fa-sharp fa-solid fa-newspaper"></i> <br />
                  <span>Memebership</span>
                </div>
                <div className="col-3">
                  <i class="fa-solid fa-person-running"></i>
                  <br />
                  <span>Plans</span>
                </div>
                <div className="col-3">
                  <i class="fa-solid fa-dice-four"></i> <br />
                  <span>More</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3" style={{ textAlign: "right", paddingTop: "10px"}}>
              <div>
                <i className="fa fa-user"> </i>
                <span className="ml-3"> Login</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );

  const mainLayOut = () => (
    <div className="container mt-5">
      <h1>Runner's Workout</h1>
      <div className="mt-5" style={{ display: "flex" }}>
        <div className="grid1 card">
          <h2 style={{ padding: "5%" }}>STRENGTH</h2>
        </div>
        <div className="grid2 card">
          <h2 style={{ padding: "5%" }}>MOBILITY</h2>
        </div>
        <div className="grid3 card">
          <h2 style={{ padding: "5%" }}>DRILLS</h2>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {navbar()}
      <div className="container">{mainLayOut()}</div>
    </>
  );
}
