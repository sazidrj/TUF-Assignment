import { useState } from "react";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [bannerSettings, setBannerSettings] = useState({
    description: "This is a banner!",
    timer: 10,
    link: "https://example.com",
    isVisible: true,
  });
  const [refreshKey, setRefreshKey] = useState(0);

  const handleUpdateBanner = (newSettings) => {
    setBannerSettings(newSettings);
    setRefreshKey((prevKey) => prevKey + 1); // Increment the refresh key to trigger re-render
  };

  return (
    <div className="App">
      <h1>My React App with Banner</h1>
      {bannerSettings.isVisible && (
        <Banner
          description={bannerSettings.description}
          timer={bannerSettings.timer}
          link={bannerSettings.link}
          isVisible={bannerSettings.isVisible}
          refreshKey={refreshKey} // Pass the refresh key to Banner
        />
      )}
      <Dashboard onUpdateBanner={handleUpdateBanner} />
    </div>
  );
};

export default App;
