import './App.css'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import RedCard from './components/RedCard'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
	return (
		<div className="App">
			<Header />

			<LandingPage />

			<RedCard />

			<Services />

			<Footer />
		</div>
	)
}

export default App
