import React, { memo } from 'react'
import { theme } from '../../themes'

import { pattern0 } from '../../icons'

import './dog.scss'

export const Dog: React.FC = memo(() => {

	return (
		<div className="dog" style={{ backgroundColor: theme.palette.primary.dark }}>
			<div className="pattern" style={{ color: theme.palette.primary.light }}>
				{ pattern0 }
			</div>
		</div>
	)
})
