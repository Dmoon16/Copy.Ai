import { BrowserRouter, Route, Routes } from "react-router-dom";
import i18n from "./i18n";
import Chat from "./pages/Chat";
import { Provider } from "react-redux";
import Layout from "./pages/Layout";
import store from "./store";
import Projects from "./pages/Projects";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={<Layout />}
					/>
					<Route
						exact
						path="/chat"
						element={<Chat />}
					/>
					<Route
						exact
						path="/projects"
						element={<Projects />}
					/>
					<Route
                        path="*"
                        element={<p>Page Will Be Soon</p>} 
                    />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}
export default App;
