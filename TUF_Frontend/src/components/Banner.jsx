/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const defaultDescription =
  "No Description in the Database. Add a description...";

const Banner = ({ bannerData }) => {
  const [totalTime, setTotalTime] = useState(bannerData.timer);

  useEffect(() => {
    setTotalTime(bannerData.totalTime);
  }, [bannerData]);

  {
    console.log(totalTime);
  }

  useEffect(() => {
    // Set the total time when bannerData changes
    setTotalTime(bannerData.timer);
  }, [bannerData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getFormattedTime = (seconds) => {
    let hr = Math.floor(seconds / 3600);
    let min = Math.floor((seconds % 3600) / 60);
    let sec = Math.floor(seconds % 60);

    return `${hr.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  if (totalTime <= 0) {
    return null;
  }

  return (
    <div className="bg-white mx-6 py-4 px-4">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-8xl">
        <div className="flex-shrink-0">
          <h1 className="text-5xl font-bold">
            <span className="text-[#F83002]">TUF</span>
          </h1>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center mx-4">
          <div className="mb-2">
            <a
              href={bannerData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-blue-700"
            >
              Please click to link for surprise...
            </a>
          </div>
          <span className="text-3xl font-semibold text-[#051b01]">
            {bannerData.description || defaultDescription}
          </span>
        </div>

        <div className="flex-shrink-0">
          <div className="text-xl font-bold border border-gray-200 bg-green-200 rounded-full shadow-lg p-4">
            {getFormattedTime(totalTime)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
