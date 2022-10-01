import {Control, Footer} from "../components";
import {useEffect, useState} from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Dog = () => (<div></div>)
const MainPage = () => {
	return (
		<div>
			<Dog/>
			<Control/>
			<Footer/>
		</div>
	)
}

export default MainPage
