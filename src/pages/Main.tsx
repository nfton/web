import {Button} from "@mui/material";
import {Link} from "react-router-dom";

export function Main() {
	return (<div>
		<Button component={Link} color="primary" to="/app">To App</Button>
	</div>)
}