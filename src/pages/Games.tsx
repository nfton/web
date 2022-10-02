import React, {memo, useState} from 'react'
import {theme} from '../themes'
import {getApp} from "firebase/app"
import {LoadingButton} from '@mui/lab';
import {GameCard} from '../components'
import {useTypedSelector} from "../hooks";
import {CHARACTERISTICS, GAMES} from '../data'
import {ECharacteristics, IGame} from "../types";
import CloseIcon from "@mui/icons-material/Close";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import {Button, Chip, Modal, Paper} from "@mui/material";
import {getFunctions, httpsCallable} from 'firebase/functions';
import {collection, getFirestore, onSnapshot} from "firebase/firestore"
import {getId, calcChars} from "../utils";

import './games.scss'
import {useNavigate} from "react-router-dom";

const GamesPage: React.FC = memo(() => {
	const navigate = useNavigate()
	const [modal, setModal] = useState(false)
	const [game, setGame] = useState<IGame | null>(null)
	const {level, currentFit} = useTypedSelector(state => state.player)
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
		onSnapshot(collection(getFirestore(), "users", getId(), "games"), async (snapshot) => {
			snapshot.forEach(e => {
				console.log(e.data())
				if (e.get("type") === game?.id) {
					setJoining(2);
					// @ts-ignore
					httpsCallable(getFunctions(getApp(), "europe-west3"), "sendGame")({
						url: 'https://nfton.space/colors/?game=' + e.get('id').toString(),
						id: getId()
					}).finally(() => {
						// @ts-ignore
						window.Telegram.WebApp.close()
					})
				}
			})
		})
		const functions = getFunctions(getApp(), "europe-west3");
		let func = httpsCallable(functions, "joinWaitRoom")
		let result = await func({
			player: {id: getId(), ability: {health: 1, speed: 2, time: 3, strength: 4}},
			type: game?.id.toUpperCase()
		})
		console.log(result)
		if (!result.data) {
			setJoining(0)
		}

	}
	return (
		<div className="games-container">
			<span className="page-heading" style={{color: theme.palette.background.paper === '#1C1C1C' ? theme.palette.text.primary : "#1C1C1C" }}>Games</span>
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
									<Chip
										className="modal-characteristics__item"
										key={e.toString()}
										icon={CHARACTERISTICS[e as ECharacteristics].icon}
										variant="outlined"
										label={(level + calcChars(currentFit, level)[e as ECharacteristics])}
										style={{borderColor: CHARACTERISTICS[e as ECharacteristics].color}}
									/>)}
							</div>
							<div className="modal-button-container">
								{game.enabled
									? (joining <= 1 ?
										<LoadingButton color="primary" loading={joining === 1} endIcon={<LocalAtmIcon/>} variant="contained"
										               onClick={joinWaitRoom}>Play 50</LoadingButton> :
										<Button color="primary" variant="outlined">Starting game...</Button>)
									: <Button disabled variant="outlined">Coming soon</Button>}
							</div>
						</Paper>}
				</div>
			</Modal>
		</div>)
})

export default GamesPage

