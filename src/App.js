import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import CustomerRegister from "./pages/CustomerRegister/CustomerRegister";
import CustomerLogin from "./pages/CustomerLogin/CustomerLogin";
import MenuPage from "./pages/MenuPage/MenuPage";
import HomePage from "./pages/HomePage/HomePage";
import TableBook from "./pages/TableBook/TableBook";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import AdminBooking from "./pages/AdminBooking";


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<CustomerLogin />} />
				<Route path="/register" element={<CustomerRegister />} />
				<Route path="/menu" element={<MenuPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/book" element={<TableBook />} />
				<Route path="/custreservation" element={<ReservationPage />} />
				<Route path="/adminbooking" element={<AdminBooking />} />
			</Routes>
		</Router>
	);
}

export default App;
