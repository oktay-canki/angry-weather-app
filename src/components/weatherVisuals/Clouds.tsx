"use client";

import CloudDensity from "@/enums/CloudDensity";
import Cloud from "../weather/Cloud";
import CloudType from "@/enums/CloudType";

type CloudsProps = {
  density: CloudDensity;
  type?: CloudType | undefined;
};

const densityMap = {
  [CloudDensity.DEFAULT]: 0,
  [CloudDensity.CLEAR]: 0,
  [CloudDensity.PARTIAL]: 2,
  [CloudDensity.EXTRA]: 4,
};

const Clouds = ({ density, type }: CloudsProps) => {
  const clouds = Array.from({ length: densityMap[density] });

  if (density === CloudDensity.CLEAR) return <></>;

  return (
    <div className="absolute w-full flex justify-evenly top-">
      {clouds.map((_, i) => {
        return (
          <Cloud
            key={i}
            cloudType={type}
            className={`top-${i % 2 === 0 ? "5" : "10"}`}
          />
        );
      })}
    </div>
  );
};

export default Clouds;
