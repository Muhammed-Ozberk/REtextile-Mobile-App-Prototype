import { useNavigate } from "react-router";
import { ChevronLeft, Package, CheckCircle2, Wrench, Truck } from "lucide-react";

const statuses = [
  {
    title: "Submitted",
    description: "Repair request received",
    date: "May 28, 2026",
    completed: true,
    icon: CheckCircle2
  },
  {
    title: "Accepted",
    description: "Shipping label sent to email",
    date: "May 28, 2026",
    completed: true,
    icon: Package
  },
  {
    title: "Repair In Progress",
    description: "Item being repaired by partner",
    date: "Expected: May 30, 2026",
    completed: false,
    current: true,
    icon: Wrench
  },
  {
    title: "Returned",
    description: "Item shipped back to you",
    date: "Expected: June 2, 2026",
    completed: false,
    icon: Truck
  }
];

export default function RepairTrackingScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate("/repair")} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1>Repair Tracking</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Wrench className="w-10 h-10" />
            </div>
            <div className="flex-1">
              <p className="text-teal-100 text-sm mb-1">Repair Order #1234</p>
              <h2 className="text-xl mb-1">Denim Jacket</h2>
              <p className="text-teal-100 text-sm">Small tear repair</p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          {statuses.map((status, index) => {
            const Icon = status.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    status.completed
                      ? 'bg-teal-500 text-white'
                      : status.current
                      ? 'bg-teal-100 text-teal-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {index < statuses.length - 1 && (
                    <div className={`w-0.5 h-16 ${
                      status.completed ? 'bg-teal-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
                <div className={`flex-1 pb-6 ${!status.completed && !status.current ? 'opacity-50' : ''}`}>
                  <h3 className={`${status.current ? 'text-teal-600' : ''}`}>
                    {status.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{status.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{status.date}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="mb-3">Repair Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Item</span>
              <span className="text-gray-900">Denim Jacket</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Damage Type</span>
              <span className="text-gray-900">Small tear on sleeve</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Repair Partner</span>
              <span className="text-gray-900">Amsterdam Textile Repair</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Return</span>
              <span className="text-teal-600">June 2, 2026</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/home")}
          className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
