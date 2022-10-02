import React, {memo, useEffect, useState} from 'react'
import {theme} from '../themes'
import {GameCard} from '../components'
import {CHARACTERISTICS, GAMES} from '../data'

import './games.scss'
import {Button, Chip, Modal, Paper} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {ECharacteristics, IGame} from "../types";
import {useTypedSelector} from "../hooks";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import DoneIcon from "@mui/icons-material/Done";
import {LoadingButton} from '@mui/lab';
import { getFunctions, httpsCallable } from 'firebase/functions';


const GamesPage: React.FC = memo(() => {
	const [modal, setModal] = useState(false)
	const [game, setGame] = useState<IGame | null>(null)
	const {level, additional} = useTypedSelector(state => state.player)
	const [joining, setJoining] = useState(0)
	const openModal = (id: string) => {
		setModal(true)
		setGame(GAMES.filter(g => g.id === id)[0])
	}
	const handleClose = () => {
		setModal(false)
		setJoining(0)
	}
	const joinWaitRoom = async () => {
		setJoining(1)
		const functions = getFunctions();
		httpsCallable(functions, "joinWaitList")

	}
	return (
		<div className="games-container">
			<span className="page-heading" style={{color: theme.palette.text.primary}}>Games</span>
			<section className="section">
				<span className="section-heading" style={{color: theme.palette.text.secondary}}>Multiplayer</span>
				<div className="games-cards games-cards__multiplayer">
					{GAMES.filter((game) => game.players > 1).map((game) => (
						<GameCard {...game} key={game.id} openModal={openModal}/>
					))}
				</div>
			</section>
			<section className="section">
				<span className="section-heading" style={{color: theme.palette.text.secondary}}>Single Games</span>
				<div className="games-cards games-cards__single">
					{GAMES.filter((game) => game.players === 1).map((game) => (
						<GameCard {...game} key={game.id} openModal={openModal}/>
					))}
				</div>
			</section>
			<Modal open={modal} onClose={() => handleClose()}>
				<div className={"game-card-modal"}>
					{game &&
						<Paper className="modal-paper">
							<CloseIcon className="close-button" onClick={() => handleClose()}/>
							<h2>{game.name}</h2>
							<img src={game.image} alt={game.name} className={"modal-image"}/>
							<h3>Enabled characteristics</h3>
							<div className="modal-characteristics">
								{game.characteristics.map(e =>
									<Chip key={e.toString()} icon={CHARACTERISTICS[e as ECharacteristics].icon} variant="outlined"
									      label={(level + additional[e as ECharacteristics])}
									      style={{borderColor: CHARACTERISTICS[e as ECharacteristics].color}}/>)}
							</div>
							<div className="modal-button-container">
								{joining <= 1 ? <LoadingButton loading={joining === 1} endIcon={<LocalAtmIcon/>} variant="contained"
								                               onClick={joinWaitRoom}>Play50</LoadingButton> :
									<Button endIcon={<DoneIcon/>} variant="contained"/>}
							</div>
						</Paper>}
				</div>
			</Modal>
		</div>)
})

export default GamesPage
