import { useState } from "react";
import { useNavigate } from "react-router";
import { Upload, X, ChevronDown } from "lucide-react";

const materialTypes = ["Cotton", "Linen", "Silk", "Denim", "Polyester", "Wool", "Mixed Fabric"];

export default function UploadScreen() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/upload-success");
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate("/home")} className="p-2">
            <X className="w-6 h-6" />
          </button>
          <h1>Donate Fabric / Material</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <form onSubmit={handleUpload} className="p-4 space-y-6">
        <div>
          <label className="block mb-2 text-sm text-gray-700">Upload Photos</label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-teal-500 transition-colors cursor-pointer">
            <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
            <p className="text-gray-600">Tap to upload photos</p>
            <p className="text-xs text-gray-400 mt-1">Up to 5 photos</p>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-700">Title</label>
          <input
            type="text"
            placeholder="e.g., Cotton fabric with small stains"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-700">Description</label>
          <textarea
            placeholder="Describe the material and its condition..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-24 resize-none"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-700">Damage Type / Cause</label>
          <input
            type="text"
            placeholder="e.g., Coffee stain, small tear"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-700">Material Type</label>
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
              required
            >
              <option value="">Select material type</option>
              {materialTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
          <h3 className="mb-2 text-teal-900">Voucher Rewards</h3>
          <div className="space-y-1 text-sm">
            <p className="flex justify-between">
              <span className="text-gray-700">Standard Item</span>
              <span className="text-teal-700">€0.50 Voucher</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-700">Large Item</span>
              <span className="text-teal-700">€1.00 Voucher</span>
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors"
          >
            Upload and List
          </button>
          <button
            type="button"
            className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Save Draft
          </button>
        </div>
      </form>
    </div>
  );
}
