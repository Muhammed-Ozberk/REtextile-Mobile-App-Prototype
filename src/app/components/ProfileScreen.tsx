import { useNavigate } from "react-router";
import { ChevronRight, MapPin, Star, Settings } from "lucide-react";

export default function ProfileScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate("/home")}>
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          <h1>Profile</h1>
          <button>
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
            <span className="text-3xl text-white">SM</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl">Sarah Mitchell</h2>
            <div className="flex items-center gap-2 text-gray-600 mt-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Amsterdam, NL</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm">4.8 (23 reviews)</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-teal-100 mb-1">Your Earned Vinted Vouchers</p>
              <p className="text-4xl">€3.50</p>
              <p className="text-teal-100 text-sm mt-1">Total Saved</p>
            </div>
            <svg className="w-12 h-12 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
          </div>
          <button
            onClick={() => navigate("/voucher-wallet")}
            className="w-full py-3 bg-white text-teal-600 rounded-xl hover:bg-teal-50 transition-colors flex items-center justify-center gap-2"
          >
            Spend on Vinted
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="mb-3">Activity</h3>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Materials Listed</p>
                <p className="text-2xl text-teal-600 mt-1">7</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Materials Collected</p>
                <p className="text-2xl text-teal-600 mt-1">3</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <button className="w-full p-4 bg-white border border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors">
            <span>My Listings</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full p-4 bg-white border border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors">
            <span>Saved Materials</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full p-4 bg-white border border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors">
            <span>Transaction History</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
