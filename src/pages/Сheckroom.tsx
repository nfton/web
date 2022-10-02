import React, { memo } from 'react'
import { Dog, Wardrobe } from '../components'

const CheckroomPage: React.FC = memo(() => {
	return (
		<div>
			<Dog checkroom={true}/>
			<Wardrobe/>
		</div>
	)
})

export default CheckroomPage
