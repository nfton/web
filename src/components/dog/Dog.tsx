import React, {CSSProperties, memo} from 'react'
import {useWindowDimensions} from '../../hooks/'
import {theme} from '../../themes'

import {pattern0} from '../../icons'

import './dog.scss'

import dDog from '../../images/characters/dDog.png'

export const Dog: React.FC = memo(() => {

	const {height} = useWindowDimensions()

	// @ts-ignore
	const divHeight = Math.min((window.Telegram.WebApp?.viewportStableHeight || 9999) - 70, height - 150 - 70 - 70)
	const divStyle: CSSProperties = {
		height: divHeight > 0 ? divHeight + 'px' : 'auto',
		backgroundColor: theme.palette.primary.dark
	}

	return (
		<div className="dog" style={divStyle}>
			<div className="pattern" style={{color: theme.palette.primary.light}}>
				{pattern0}
			</div>
			<div className="d-dog">
				<img src={dDog} alt="character" className="image"/>
			</div>
		</div>
	)
})
