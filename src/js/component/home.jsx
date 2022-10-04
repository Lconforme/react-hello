import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
//include images into your bundle
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container-fluid">
        <Jumbotron />
        <div className="row mt-2 mb-2">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;