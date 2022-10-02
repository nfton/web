import React, {CSSProperties, memo} from 'react'
import { useTypedSelector, useWindowDimensions } from '../../hooks/'
import {Characteristics} from "../characteristics/Characteristics"
import {theme} from '../../themes'

import {pattern0} from '../../icons'

import './dog.scss'

import dDog from '../../images/characters/dDog.png'
import dDogSmallHand from '../../images/characters/dDog_hand_small.png'
import dDogLargeHand from '../../images/characters/dDog_hand_large.png'

interface IDog {
	checkroom?: boolean;
}

export const Dog: React.FC<IDog> = memo(({checkroom}) => {
	const { currentFit } = useTypedSelector(state => state.player)
	const {height} = useWindowDimensions()

	// @ts-ignore
	const divHeight = Math.min((window.Telegram.WebApp?.viewportStableHeight || 9999) - 70, height - 150 - 70 - 70)
	const divStyle: CSSProperties = {
		height: checkroom ? '40vh' : divHeight > 0 ? divHeight + 'px' : 'auto',
		backgroundColor: theme.palette.primary.dark
	}

	return (
		<div className="dog" style={divStyle}>
			<div className="pattern" style={{color: theme.palette.primary.light}}>
				{pattern0}
			</div>
			<div className={`d-dog${checkroom ? ' d-dog--checkroom' : ''}`}>
				<div className="image-container">
					<div className="d-dog__fit">
						{ currentFit.collar && <div className="d-dog__fit__item d-dog__fit__item--collar">
              <img src={ currentFit.collar.image } alt={ currentFit.collar.name } className="attribute" />
            </div> }
						{ (currentFit.cardigan || currentFit.tShirt) && <div className="d-dog__fit__item d-dog__fit__item--top">
              <img
                src={ currentFit.cardigan?.image || currentFit.tShirt?.image }
                alt={ currentFit.cardigan?.name || currentFit.tShirt?.name }
                className="attribute"
              />
            </div> }
						{ (currentFit.pants) && <div className="d-dog__fit__item d-dog__fit__item--bottom">
              <img src={ currentFit.pants.image } alt={ currentFit.pants.name } className="attribute" />
            </div> }
						{ (currentFit.cardigan || currentFit.tShirt) && <div className="d-dog__fit__hand">
							{ currentFit.cardigan
								? <img src={ dDogSmallHand } alt="Small dDog hand" className="image" />
								: <img src={ dDogLargeHand } alt="Large dDog hand" className="image" />
							}
            </div> }
					</div>
					<img src={ dDog } alt="character" className="image" />
				</div>
				{checkroom && (
					<div className="characteristics">
						<Characteristics/>
					</div>
				)}
			</div>
		</div>
	)
})
