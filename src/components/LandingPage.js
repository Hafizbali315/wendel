import landingpage from '../assets/videos/landingpage.mp4'

import bred from '../assets/images/bred.png'
import hec from '../assets/images/hec.png'
import lambs from '../assets/images/lambs.png'
import techniweb from '../assets/images/techniweb.png'

const LandingPage = () => {
	return (
		<div className="landing_page">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sm_content">
							<p>
								Branding <div className="dot"></div>
								<span style={{ fontStyle: 'italic', fontFamily: 'sans-serif', fontWeight: '300' }}>digital</span>{' '}
								<div className="dot"></div>
								communication
							</p>
						</div>
					</div>
				</div>

				<div className="mt-5 row">
					<div className="col-12">
						<div className="lg_content">
							<h1>On aime</h1>
							<h1>quand</h1>
							<h1>ça claque</h1>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<video className="video" loop muted autoplay="true" preload="false">
							<source src={landingpage} type="video/mp4" />
						</video>
					</div>
				</div>

				<div className="branding_content mt-5">
					<h2>
						Ça claque quand les bonnes idées sont bien réalisées, quand l’univers visuel, le storytelling et l’expérience de marque sont
						pensés de manière cohérente sur tous les points de contact. Mais ça claque surtout quand votre consommateur comprend
						immédiatement l’intérêt de votre marque.
					</h2>

					<div className="branding_heading">
						<div className="green_dot"></div>
						<h4>comprendre notre approche</h4>
					</div>

					<div className="yellow_circle"></div>
				</div>
			</div>

			<div className=" branding_images_card">
				<div className="container">
					<div className="row" style={{ alignItems: 'center' }}>
						<div className="col-lg-3">
							<img src={bred} alt="bred" />
						</div>
						<div className="col-lg-3">
							<img src={hec} alt="bred" />
						</div>
						<div className="col-lg-3">
							<img src={lambs} alt="bred" />
						</div>
						<div className="col-lg-3">
							<img src={techniweb} alt="bred" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
