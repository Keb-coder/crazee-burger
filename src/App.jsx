import { Routes, Route } from "react-router-dom"; // Import nécessaire
import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import OrderPage from "./components/pages/order/OrderPage";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/order/:username" element={<OrderPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
