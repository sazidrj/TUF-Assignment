/* eslint-disable react/prop-types */

const Dashboard = ({ videoUrl }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white dark:bg-dark_50 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
        <div className="px-4 py-2 border-b border-zinc-200 dark:border-zinc-700">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-zinc-800 dark:text-zinc-100 text-lg">
              Largest Element in an Array
            </div>
            <button className="bg-gray-200 rounded-full w-fit">
              <a
                target="_blank"
                rel="noreferrer"
                className="btn-brand-2 md:text-[14px] text-[10px] p-3 font-semibold"
                href={videoUrl}
              >
                Open in New Tab
              </a>
            </button>
          </div>
        </div>
        <div className="youtube-modal">
          <iframe
            className="w-[450px] h-[180px] md:w-[700px] md:h-[394px]"
            loading="lazy"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            src={videoUrl}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
