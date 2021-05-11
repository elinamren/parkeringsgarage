const freeSpotsText = document.querySelector("#free-spots");
const freeSpotsCarText = document.querySelector("#free-spots-car");
const freeSpotsMcText = document.querySelector("#free-spots-mc");
const freeSpotsChargingText = document.querySelector("#free-spots-charging");
const floor0Text = document.querySelector("#floor0");
const floor1Text = document.querySelector("#floor1");
const floor2Text = document.querySelector("#floor2");
const floor3Text = document.querySelector("#floor3");

fetch("https://adp.im/api/garage.json")
  .then((response) => response.json())
  .then((data) => {
    const parkingData = data.floors;
    const freeSpotsFloor0 = parkingData[0].parking_spots.filter((spot) => {
      return spot.is_disabled_parking === false && spot.is_available === true;
    });
    const freeSpotsFloor1 = parkingData[1].parking_spots.filter((spot) => {
      return spot.is_disabled_parking === false && spot.is_available === true;
    });
    const freeSpotsFloor2 = parkingData[2].parking_spots.filter((spot) => {
      return spot.is_disabled_parking === false && spot.is_available === true;
    });
    const freeSpotsFloor3 = parkingData[3].parking_spots.filter((spot) => {
      return spot.is_disabled_parking === false && spot.is_available === true;
    });

    const freeSpots = [
      ...freeSpotsFloor0,
      ...freeSpotsFloor1,
      ...freeSpotsFloor2,
      ...freeSpotsFloor3,
    ];

    const freeMcSpots = freeSpots.filter((spots) => spots.type === "mc");
    const freeCarSpots = freeSpots.filter((spots) => spots.type === "car");
    const freeChargingSpots = freeSpots.filter(
      (spots) => spots.is_charging_station === true
    );

    freeSpotsText.innerText = freeSpots.length;

    freeSpotsCarText.innerText = freeCarSpots.length;
    freeSpotsMcText.innerText = freeMcSpots.length;
    freeSpotsChargingText.innerText = freeChargingSpots.length;

    floor0Text.innerText = freeSpotsFloor0.length;
    floor1Text.innerText = freeSpotsFloor1.length;
    floor2Text.innerText = freeSpotsFloor2.length;
    floor3Text.innerText = freeSpotsFloor3.length;
  });
