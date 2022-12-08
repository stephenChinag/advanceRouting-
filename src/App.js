import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import AllQoutes from "./pages/AllQoutes";
import QouteDetails from "./pages/QouteDetails";
import NewQoutes from "./pages/NewQoutes";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/qoutes" />
				</Route>
				<Route path="/qoutes" exact>
					<AllQoutes />
				</Route>
				<Route path="/qoutes/:qoutesId">
					<QouteDetails />
				</Route>
				<Route path="/new-qoute">
					<NewQoutes />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
