import React, { memo } from 'react'
import { Control, Dog } from "../components"

const MainPage: React.FC = memo(() => {
	return (
		<>
			<Dog/>
			<Control/>
		</>
	)
})

export default MainPage
