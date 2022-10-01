import React, { memo, useEffect, useState } from 'react'
import {Control, Footer} from "../components";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Dog = () => (<div></div>)

const MainPage: React.FC = memo(() => {
	return (
		<div className="page page--w-h">
			<Dog/>
			<Control/>
			<Footer/>
		</div>
	)
})

export default MainPage
