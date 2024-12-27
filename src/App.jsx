import { Routes, Route } from "react-router-dom"; // Import nécessaire
import "./App.css";
import OrderPage from "./components/pages/login/order/OrderPage";
import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/login/error/ErrorPage";

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
