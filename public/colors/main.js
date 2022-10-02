const {createApp} = Vue
import {getApp, initializeApp} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js'
import {
	doc, collection, getDoc, getFirestore, onSnapshot, updateDoc
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
import {
	getFunctions, httpsCallable
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-functions.js'

const firebaseConfig = {
	apiKey: "AIzaSyB1TpbBCEurdfA6jaJpms2SCJxPDKWuoX8",
	authDomain: "nfton-space.firebaseapp.com",
	projectId: "nfton-space",
	storageBucket: "nfton-space.appspot.com",
	messagingSenderId: "512683949682",
	appId: "1:512683949682:web:a558c262531d7635a64ceb",
	measurementId: "G-RLX65T99MG"
};
const colors = ['YELLOW', 'RED', 'GREEN', 'BLUE', 'BLACK', 'ORANGE']
createApp({
	async mounted() {
		let uri = window.location.search.substring(1);
		let params = new URLSearchParams(uri);
		this.$data.game_id = params.get("game")
		if (!this.$data.game_id) {

		}
		initializeApp(firebaseConfig);
		onSnapshot(doc(collection(getFirestore(), "game_colors"), params.get("game")), (doc) => {
			this.updateGame(doc)
		})

		let interval = setInterval(() => {
			if (this.$data.started !== 0) {
				if (this.$data.started > Date.now()) {
					this.$data.countdown = Math.floor((this.$data.started - Date.now()) / 1000);
				} else {
					console.log('started')
					clearInterval(interval)
					this.$data.isStarted = true
					this.start(0)
					this.$data.countdown = 20 + this.$data.me.ability.time
					this.$data.ended = Date.now() + this.$data.countdown * 1000
					let stop = setInterval(() => {
						this.$data.countdown = ((this.$data.ended - Date.now()) / 1000).toFixed(1)
						if (this.$data.countdown < 0) {
							clearInterval(stop)
							this.over = true
							let func = httpsCallable(getFunctions(getApp(), "europe-west3"), "gameOver")
							func({result: this.$data.result, player: this.$data.me.id, game: this.$data.game_id})
						}
					}, 100)
				}
			}
		}, 200)
	}, data() {
		return {
			game: {},
			me: {},
			ended: 0,
			id: getId(),
			game_id: null,
			opponent: {},
			started: 0,
			countdown: 5,
			isStarted: false,
			activeSlide: -1,
			active: {},
			result: 0,
			over: false
		}
	}, methods: {
		updateGame(doc) {
			console.log(doc.data())
			if (doc.data().players.filter(p => p.id == this.$data.id).length === 0) {
				return;
			}
			this.$data.game = doc.data()
			this.$data.me = doc.data().players.filter(p => p.id == this.$data.id)[0]
			this.$data.opponent = doc.data().players.filter(p => p.id !== this.$data.id)[0]
			if (this.$data.me.ready && this.$data.opponent.ready && this.$data.started == 0) {
				this.$data.started = Date.now() + 2000
			}
		}, start(i) {
			this.$data.activeSlide = i
			let qf = this.$data.game.result[this.$data.activeSlide]
			this.$data.active = this.generateChoices(qf)
			console.log(this.$data.active)

		}, ready() {
			updateDoc(doc(collection(getFirestore(), "game_colors"), this.$data.game_id), {
				players: [{
					...this.$data.me, ready: true
				}, this.$data.opponent]
			})
		}, generateChoices(answer) {
			let second = getRandomFrom(colors.filter(e => e !== answer))
			while (second === undefined) {
				second = getRandomFrom(colors.filter(e => e !== answer))
			}
			let arr = []
			let selected = [answer, second]
			arr.push({s: answer, right: true})
			arr.push({s: second})
			for (let i = 0; i < 2; i++) {
				let s = getRandomFrom(colors.filter(e => e !== answer && !selected.includes(e)))
				while (s === undefined) {
					s = getRandomFrom(colors.filter(e => e !== answer && !selected.includes(e)))
				}
				selected.push(s)
				arr.push({s})
			}
			arr = shuffle(arr)
			console.log(arr)
			return {q: {f: answer, s: second}, c: arr}
		}, select(i) {
			console.log(i)
			if (i === this.game.result[this.$data.activeSlide]) {
				this.$data.result++;
			}
			this.start(this.$data.activeSlide + 1)
		}
	}
}).mount('#app')


function getRandomFrom(array) {
	return array[Math.round(Math.random() * array.length) - 1]
}

function shuffle(array) {
	let currentIndex = array.length, randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex !== 0) {

		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
}


function getId() {
	let id = "null"
	id = window.Telegram.WebApp.initDataUnsafe.user.id
	return id
}