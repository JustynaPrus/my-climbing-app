import React from "react";
import { Map, Marker } from "pigeon-maps";

export const MyMap = () => {
  return (
    <Map height={600} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
  );
};
