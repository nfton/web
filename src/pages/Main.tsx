import React, { memo } from 'react'
import { Control } from "../components";

const Dog = () => (<div></div>)

const MainPage: React.FC = memo(() => {
	return (
		<div className="page page--w-h">
			<Dog/>
			<Control/>
		</div>
	)
})

export default MainPage
