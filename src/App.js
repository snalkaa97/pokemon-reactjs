import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/pokemon/:id" component={DetailsPage} />
				{/* <Route path="/stories" component={Example}/> */}
			</Router>
		</div>
	);
}

export default App;
