import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import axios from "axios";
import DescriptionForm from "./components/DescriptionForm";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleBannerVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const [bannerData, setBannerData] = useState({
    description: "",
    timer: 0,
    link: "",
  });

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/banner/1");
        setBannerData(response.data);

        console.log(response.data.parseJson);

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBannerData();
  }, []);

  const handleUpdateBanner = async (bannerContent) => {
    try {
      const res = await axios.put(
        "http://localhost:3000/banner/1",
        bannerContent
      );

      if (res.data.success) {
        setBannerData(res.data.banner);
      }
      setIsVisible(true);
      console.log("updated Successfully.");
    } catch (error) {
      console.error("Error updating banner data:", error);
    }
  };

  return (
    <div className="">
      {isVisible && (
        <Banner
          bannerData={bannerData}
          toggleFunction={toggleBannerVisibility}
        />
      )}
      <hr className="  bg-gray-200 border-0 dark:bg-gray-700 mb-10" />
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={toggleBannerVisibility}
          className="bg-[#ac2ed2] px-4 py-2 text-white text-bold"
        >
          Toggle Banner
        </button>

        <div className="mt-4 w-full max-w-xl">
          <DescriptionForm onUpdateBanner={handleUpdateBanner} />
        </div>
      </div>
    </div>
  );
};

export default App;
