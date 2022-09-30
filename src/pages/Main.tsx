import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const MainPage = () => {
	return (<div>
		<Button component={Link} variant="contained" color="primary" to="/app">To App</Button>
		<Button component={Link} variant="contained" color="secondary" to="/app">To App</Button>
	</div>)
}

export default MainPage
