import { useNavigate } from "react-router";
import { ChevronLeft, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ShoppingCartScreen() {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useCart();

  const handlePurchase = () => {
    clearCart();
    navigate("/home");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white pb-20">
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="flex items-center justify-between p-4">
            <button onClick={() => navigate("/home")} className="p-2 -ml-2">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1>Shopping Cart</h1>
            <div className="w-10"></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-6 py-20">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-xl mb-2">Your cart is empty</h2>
          <p className="text-gray-600 text-center mb-6">
            Browse materials and add them to your cart
          </p>
          <button
            onClick={() => navigate("/home")}
            className="px-6 py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-32">
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate("/home")} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1>Shopping Cart</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-600">{cart.length} {cart.length === 1 ? 'item' : 'items'}</p>
        </div>

        <div className="space-y-3 mb-6">
          {cart.map((material) => (
            <div
              key={material.id}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                  {material.image}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <h3 className="font-medium truncate">{material.title}</h3>
                      <span className="inline-block px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full mt-1">
                        {material.type}
                      </span>
                    </div>
                    <button
                      onClick={() => removeFromCart(material.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>

                  <p className="text-sm text-gray-600 mb-1">{material.condition}</p>
                  <p className="text-xs text-teal-600">{material.delivery}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-4">
          <h3 className="text-teal-900 mb-2">Request Summary</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">Total items</span>
              <span className="text-teal-700">{cart.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Free delivery items</span>
              <span className="text-teal-700">
                {cart.filter(item => item.delivery === "Free delivery").length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-md mx-auto space-y-3">
          <button
            onClick={() => navigate("/home")}
            className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Continue Browsing
          </button>
          <button
            onClick={handlePurchase}
            className="w-full py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            Request Materials ({cart.length})
          </button>
        </div>
      </div>
    </div>
  );
}
