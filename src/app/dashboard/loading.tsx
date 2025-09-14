import "../../styles/loader.css";

export default function DashboardLoading() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="w-12 h-12 border-4 border-white border-t-transparent border-b-transparent rounded-full animate-spin"></div>

        {/* Inner pulsing dot */}
        <div className="absolute w-4 h-4 bg-white rounded-full animate-ping"></div>
      </div>
    </div>
  );
}
