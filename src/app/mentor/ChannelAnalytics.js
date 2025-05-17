export default function ChannelAnalytics({ onClose }) {
  // Sample data
  const stats = {
    totalVideos: 6,
    totalViews: 7300,
    totalLikes: 2200,
    topVideo: "Digital Skills for Beginners",
    engagementRate: "30%",
    subscribers: 1200,
    avgWatchTime: "12m 30s"
  };

  return (
    <div className="bg-white rounded-2xl p-8 max-w-md w-full text-gray-900 relative shadow-lg">
      <button
        className="absolute top-3 right-3 text-xl text-gray-400 hover:text-pink-500"
        onClick={onClose}
      >
        ×
      </button>
      <h2 className="text-2xl font-bold mb-6 text-pink-600 text-center">Channel Analytics</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold">Total Videos:</span>
          <span>{stats.totalVideos}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Total Views:</span>
          <span>{stats.totalViews}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Total Likes:</span>
          <span>{stats.totalLikes}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Subscribers:</span>
          <span>{stats.subscribers}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Avg. Watch Time:</span>
          <span>{stats.avgWatchTime}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Engagement Rate:</span>
          <span>{stats.engagementRate}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Top Video:</span>
          <span>{stats.topVideo}</span>
        </div>
      </div>
    </div>
  );
}