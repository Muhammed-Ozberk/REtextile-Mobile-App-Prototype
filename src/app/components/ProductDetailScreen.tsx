import { useNavigate } from "react-router";
import { ChevronLeft, MessageCircle, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { materials } from "./HomeScreen";

export default function ProductDetailScreen() {
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();

  const currentMaterial = materials[0];
  const inCart = isInCart(currentMaterial.id);

  const handleAddToCart = () => {
    addToCart(currentMaterial);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate("/home")} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
        <span className="text-9xl">🧵</span>
      </div>

      <div className="p-4 space-y-6">
        <div>
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-2xl">Cotton Fabric Material</h1>
            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
              Cotton
            </span>
          </div>
          <p className="text-gray-600">Posted 2 hours ago</p>
        </div>

        <div>
          <h2 className="mb-2">Condition</h2>
          <p className="text-gray-700">
            Slight staining on bottom corner. Otherwise in good condition. Perfect for craft projects, learning to sew, or upcycling.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Material Type</span>
            <span className="text-gray-900">100% Cotton</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Damage</span>
            <span className="text-gray-900">Coffee stain</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Size</span>
            <span className="text-gray-900">Large (1.5m x 1m)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery</span>
            <span className="text-teal-600">Free delivery</span>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xl">👤</span>
          </div>
          <div className="flex-1">
            <p className="font-medium">Sarah M.</p>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm text-gray-600">4.8 (23 reviews)</span>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="max-w-md mx-auto flex gap-3">
            <button className="flex-1 py-3 border-2 border-teal-500 text-teal-500 rounded-xl hover:bg-teal-50 transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Message
            </button>
            <button
              onClick={handleAddToCart}
              disabled={inCart}
              className={`flex-1 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 ${
                inCart
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-teal-500 text-white hover:bg-teal-600"
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {inCart ? "In Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
