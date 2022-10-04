import React from "react";
const Card = () => {
  return (
    <div className="card text-center">
      <img src="https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Find out more
        </a>
      </div>
    </div>
  );
};
export { Card };
