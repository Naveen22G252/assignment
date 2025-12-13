import React from "react";

export default function App() {
  const vegetables = [
    { name: "carrot", color: "orange", price: 30 },
    { name: "potato", color: "brown", price: 20 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Vegetables List</h2>
      <ul>
        {vegetables.map((veg, index) => (
          <li key={index}>
            <strong>Name:</strong> {veg.name}, <strong>Color:</strong> {veg.color}, <strong>Price:</strong> ₹{veg.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
