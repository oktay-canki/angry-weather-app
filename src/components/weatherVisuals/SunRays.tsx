const SunRays = () => {
  return (
    <>
      <div className="ray -rotate-75"></div>
      <div className="ray -rotate-60" style={{ animationDelay: "1s" }}></div>
      <div className="ray -rotate-45" style={{ animationDelay: "3s" }}></div>
      <div className="ray -rotate-20" style={{ animationDelay: "2s" }}></div>
    </>
  );
};

export default SunRays;
