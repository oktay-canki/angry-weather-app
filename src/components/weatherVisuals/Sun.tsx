const Sun = () => {
  return (
    <>
      <div className="h-60 w-60 -left-25 -top-25 p-2 relative rounded-full bg-amber-400 animate-spin-slow shadow-[0_0_60px_20px_rgba(253,224,71,0.6)] z-20">
        <div className="w-full h-full bg-amber-300 rounded-full"></div>

        {/* TOP BEAM */}
        <div className="absolute w-1 h-4 bg-amber-400 rounded-md left-1/2 -top-5"></div>
        <div className="absolute w-1 h-4 bg-amber-400 rounded-md left-10/12 top-2 rotate-45"></div>

        {/* RIGHT BEAM */}
        <div className="absolute w-4 h-1 bg-amber-400 rounded-md -right-5 top-1/2"></div>
        <div className="absolute w-1 h-4 bg-amber-400 rounded-md left-1/12 top-5 -rotate-45"></div>

        {/* BOTTOM BEAM */}
        <div className="absolute w-1 h-4 bg-amber-400 rounded-md left-1/2 -bottom-5"></div>
        <div className="absolute w-1 h-4 bg-amber-400 rounded-md left-10/12 bottom-2 rotate-135"></div>

        {/* LEFT BEAM */}
        <div className="absolute w-4 h-1 bg-amber-400 rounded-md -left-5 top-1/2"></div>
        <div className="absolute w-1 h-4 bg-amber-400 rounded-md left-1/12 bottom-5 rotate-45"></div>
      </div>
    </>
  );
};

export default Sun;
