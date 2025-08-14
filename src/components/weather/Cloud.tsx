import CloudType from "@/enums/CloudType";

type CloudProps = {
  className?: string;
  cloudType?: CloudType;
};

const Cloud = ({ className, cloudType }: CloudProps) => {
  const colorClass = cloudType === CloudType.DARK ? "bg-zinc-500" : "bg-white";
  return (
    <div
      className={`block w-52 h-20 relative z-50 animate-drift duration-500 ${
        className ?? ""
      }`}
    >
      <div
        className={`absolute top-5 left-5 w-16 h-16 rounded-full ${colorClass}`}
      ></div>
      <div
        className={`absolute top-2 left-15 w-20 h-20 rounded-full ${colorClass}`}
      ></div>
      <div
        className={`absolute top-6 left-30 w-16 h-16 rounded-full ${colorClass}`}
      ></div>
      <div
        className={`absolute top-10 w-52 h-14 rounded-full ${colorClass}`}
      ></div>
    </div>
  );
};

export default Cloud;
