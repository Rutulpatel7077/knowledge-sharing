import React, { useEffect } from "react";
import { useResource } from "react-request-hook";

const Cards = () => {
  const [vehicles, getVehicles] = useResource(() => ({
    url: "https://api.bhadegadi.com/v2/vehicles",
    method: "get",
  }));

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <>
      <h1>Vehicles</h1>
      {vehicles.isLoading && <p>Loading...</p>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {vehicles?.data?.DataList?.map((vehicle) => (
          <div
            className="card"
            key={vehicle.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "30%",
              padding: "10px",
              outline: "1px solid #ccc",
              margin: "10px",
            }}
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{vehicle.name}</h3>
            <p>{vehicle.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
