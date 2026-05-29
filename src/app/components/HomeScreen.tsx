import { useNavigate } from "react-router";
import { Search, Plus } from "lucide-react";

const categories = ["Cotton", "Linen", "Silk", "Denim", "Polyester", "Wool"];

const materials = [
  {
    id: 1,
    type: "Cotton",
    condition: "Slight staining",
    delivery: "Free delivery",
    image: "🧵"
  },
  {
    id: 2,
    type: "Denim",
    condition: "Small tear",
    delivery: "Pickup available",
    image: "👖"
  },
  {
    id: 3,
    type: "Silk",
    condition: "Color fading",
    delivery: "Free delivery",
    image: "🧣"
  },
  {
    id: 4,
    type: "Wool",
    condition: "Minor holes",
    delivery: "Pickup available",
    image: "🧶"
  }
];

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">REtextile</h1>
            <button onClick={() => navigate("/profile")} className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-lg">👤</span>
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search materials..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full whitespace-nowrap hover:bg-teal-100 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h2 className="mb-4">Recommended Materials</h2>

        <div className="grid grid-cols-2 gap-3">
          {materials.map((material) => (
            <div
              key={material.id}
              onClick={() => navigate("/product-detail")}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center text-6xl">
                {material.image}
              </div>
              <div className="p-3 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                    {material.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{material.condition}</p>
                <p className="text-xs text-gray-500">{material.delivery}</p>
                <button className="w-full mt-2 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors flex items-center justify-center gap-1">
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex items-center justify-around py-3 max-w-md mx-auto">
          <button onClick={() => navigate("/home")} className="flex flex-col items-center gap-1 text-teal-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="text-xs">Home</span>
          </button>
          <button onClick={() => navigate("/upload")} className="flex flex-col items-center gap-1 text-gray-600">
            <Plus className="w-6 h-6" />
            <span className="text-xs">Upload</span>
          </button>
          <button onClick={() => navigate("/repair")} className="flex flex-col items-center gap-1 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span className="text-xs">Repair</span>
          </button>
          <button onClick={() => navigate("/profile")} className="flex flex-col items-center gap-1 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
