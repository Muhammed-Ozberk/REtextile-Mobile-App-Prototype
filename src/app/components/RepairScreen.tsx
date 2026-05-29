import { useNavigate } from "react-router";
import { Upload, X } from "lucide-react";

export default function RepairScreen() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/repair-tracking");
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate("/home")} className="p-2">
            <X className="w-6 h-6" />
          </button>
          <h1>Repair & Return</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6">
          <h3 className="text-teal-900 mb-2">Repair Service</h3>
          <p className="text-sm text-gray-700">
            Send us your damaged Vinted items. Our partner repair shops will fix them and return them to you ready to wear again.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm text-gray-700">Upload Item Photo</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-teal-500 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
              <p className="text-gray-600">Tap to upload photo</p>
              <p className="text-xs text-gray-400 mt-1">Show the damage clearly</p>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700">Describe Damage</label>
            <textarea
              placeholder="Describe what needs to be repaired..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-32 resize-none"
              required
            />
          </div>

          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <h3 className="font-medium">Repair Process</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                <p>Submit repair request with photos</p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                <p>Receive shipping label via email</p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                <p>Send item to repair partner</p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs">4</span>
                <p>Item repaired and returned to you</p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Estimated repair time</span>
              <span className="text-teal-700 font-medium">5-7 days</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors"
          >
            Request Repair
          </button>
        </form>
      </div>
    </div>
  );
}
