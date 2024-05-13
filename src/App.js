import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import CustomerRegister from "./pages/CustomerRegister/CustomerRegister";
import CustomerLogin from "./pages/CustomerLogin/CustomerLogin";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<CustomerLogin />} />
				<Route path="/register" element={<CustomerRegister />} />
			</Routes>
		</Router>
	);
}

export default App;
