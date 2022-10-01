import React, {memo, useEffect} from 'react'
import {Control, Dog} from "../components"
import {useAction} from "../hooks";
import {loadBalances} from "../store/action_creators";

const MainPage: React.FC = memo(() => {
	const {loadBalances} = useAction()
	useEffect(() => {
		loadBalances()
	})
	return (
		<>
			<Dog/>
			<Control/>
		</>
	)
})

export default MainPage