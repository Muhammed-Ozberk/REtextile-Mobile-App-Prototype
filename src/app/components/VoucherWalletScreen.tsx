import { useNavigate } from "react-router";
import { ChevronLeft, ExternalLink } from "lucide-react";

const transactions = [
  { date: "May 28, 2026", amount: "+€0.50", description: "Cotton fabric uploaded", type: "earned" },
  { date: "May 27, 2026", amount: "+€1.00", description: "Large denim item uploaded", type: "earned" },
  { date: "May 25, 2026", amount: "+€0.50", description: "Silk material uploaded", type: "earned" },
  { date: "May 24, 2026", amount: "+€0.50", description: "Wool fabric uploaded", type: "earned" },
  { date: "May 22, 2026", amount: "+€1.00", description: "Large mixed fabric uploaded", type: "earned" },
];

export default function VoucherWalletScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate("/profile")} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1>Voucher Wallet</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white">
          <p className="text-teal-100 mb-2">Available Balance</p>
          <p className="text-5xl mb-6">€3.50</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-teal-100 text-sm">Total Earned</p>
              <p className="text-2xl mt-1">€3.50</p>
            </div>
            <div>
              <p className="text-teal-100 text-sm">Total Spent</p>
              <p className="text-2xl mt-1">€0.00</p>
            </div>
          </div>

          <button className="w-full py-3 bg-white text-teal-600 rounded-xl hover:bg-teal-50 transition-colors flex items-center justify-center gap-2">
            Spend on Vinted
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div>
          <h2 className="mb-4">Transaction History</h2>
          <div className="space-y-3">
            {transactions.map((transaction, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-gray-500 mt-1">{transaction.date}</p>
                  </div>
                  <span className="text-teal-600 font-medium text-lg">{transaction.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
          <h3 className="mb-2 text-teal-900">How to earn more vouchers</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="text-teal-600">•</span>
              <span>Upload standard items (€0.50 each)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal-600">•</span>
              <span>Upload large items (€1.00 each)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal-600">•</span>
              <span>Help extend the life of textiles</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
