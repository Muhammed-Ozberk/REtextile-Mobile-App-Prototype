import { useNavigate } from "react-router";
import { CheckCircle } from "lucide-react";

export default function UploadSuccessScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-sm">
        <div className="flex justify-center">
          <CheckCircle className="w-24 h-24 text-teal-500" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl">Material successfully listed</h1>
          <p className="text-gray-600">Your material is now available for others to request</p>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
          <p className="text-gray-700 mb-2">Voucher earned</p>
          <p className="text-4xl text-teal-600">€0.50</p>
        </div>

        <div className="space-y-3 pt-4">
          <button
            onClick={() => navigate("/profile")}
            className="w-full py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors"
          >
            View Wallet
          </button>
          <button
            onClick={() => navigate("/home")}
            className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
