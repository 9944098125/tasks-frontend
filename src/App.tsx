import { Provider } from "react-redux";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { store } from "./Redux/Store/Store";
import { Toaster } from "react-hot-toast";

export default function App() {
	return (
		<Provider store={store}>
			<Dashboard />
			<Toaster />
		</Provider>
	);
}
