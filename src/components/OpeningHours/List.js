import React from "react";
import { useMockData } from "../../hooks/useSettings";

const OpeningHoursList = () => {
  const { settings } = useMockData();
  console.log(settings);
  const openingHours = settings.businessHours;
  if (!settings) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {openingHours &&
        openingHours.map((hour, key) => {
          return <div>{hour}</div>;
        })}
      <div>09:00 - 17:00</div>
    </>
  );
};

export default OpeningHoursList;
