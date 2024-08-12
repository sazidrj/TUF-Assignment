/* eslint-disable react/prop-types */
import Dashboard from "./Dashboard";
import QuestionComponent from "./QuestionComponent";
import DescriptionForm from "./DescriptionForm";

const HomePage = ({ onSelectQuestion, videoUrl, onUpdateBanner }) => {
  // Manage banner visibility
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 border-gray-600 p-4">
          <QuestionComponent onSelectQuestion={onSelectQuestion} />
        </div>
        <div className="col-span-6 border-gray-600 p-4">
          <Dashboard videoUrl={videoUrl} />
        </div>
        <div className="col-span-3 border-gray-600 p-4">
          <DescriptionForm onUpdateBanner={onUpdateBanner} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
