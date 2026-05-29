import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { CartProvider } from "./context/CartContext";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import UploadScreen from "./components/UploadScreen";
import UploadSuccessScreen from "./components/UploadSuccessScreen";
import ProductDetailScreen from "./components/ProductDetailScreen";
import ProfileScreen from "./components/ProfileScreen";
import VoucherWalletScreen from "./components/VoucherWalletScreen";
import RepairScreen from "./components/RepairScreen";
import RepairTrackingScreen from "./components/RepairTrackingScreen";
import ShoppingCartScreen from "./components/ShoppingCartScreen";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-white max-w-md mx-auto shadow-xl">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/upload" element={<UploadScreen />} />
            <Route path="/upload-success" element={<UploadSuccessScreen />} />
            <Route path="/product-detail" element={<ProductDetailScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/voucher-wallet" element={<VoucherWalletScreen />} />
            <Route path="/repair" element={<RepairScreen />} />
            <Route path="/repair-tracking" element={<RepairTrackingScreen />} />
            <Route path="/cart" element={<ShoppingCartScreen />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}