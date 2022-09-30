import {createMemoryRouter} from "react-router-dom";
import {Main} from "../pages/Main";
import App from "../App";

const router = createMemoryRouter([
	{
		path: "/",
		element: <Main/>,
	},{
		path: "/main",
		element: <Main/>,
		id: 'main'
	},{
		path: "/app",
		element: <App/>,
		id: 'app'
	},
]);

export default router