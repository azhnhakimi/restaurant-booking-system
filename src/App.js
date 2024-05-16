import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import CustomerRegister from "./pages/CustomerRegister/CustomerRegister";
import CustomerLogin from "./pages/CustomerLogin/CustomerLogin";
import MenuPage from "./pages/MenuPage/MenuPage";
import HomePage from "./pages/HomePage/HomePage";
import TableBook from "./pages/TableBook/TableBook";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<CustomerLogin />} />
				<Route path="/register" element={<CustomerRegister />} />
				<Route path="/menu" element={<MenuPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/book" element={<TableBook />} />
			</Routes>
		</Router>
	);
}

export default App;
