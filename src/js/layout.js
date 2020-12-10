import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import Planet from "./views/planets";
import People from "./views/people";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/people" component={People} />
					<Route exact path="/planets" component={Planet} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
