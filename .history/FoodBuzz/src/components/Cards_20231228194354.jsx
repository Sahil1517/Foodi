import React from "react";

function Cards({ item }) {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={item.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>Description of the item</p>
          <div className="card-actions justify-between items-center mt-2">
            <h5 className="font-semibold"><span className="text-sm text-red">₹</span>{item.price}</h5>
            <button className="btn bg-green text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
