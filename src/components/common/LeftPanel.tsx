import Presenter from "./Presenter";
import SummaryCard from "./SummaryCard";

const LeftPanel = () => {
  return (
    <div className="flex flex-col lg:w-lg h-dvh">
      <SummaryCard />
      <Presenter />
    </div>
  );
};

export default LeftPanel;
