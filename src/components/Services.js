import service1 from '../assets/images/service1.png'
import service3 from '../assets/images/service3.png'
import service2 from '../assets/images/service2.png'
import service4 from '../assets/images/service4.png'

const Services = () => {
	return (
		<div className="services">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-12 order-last order-lg-first pe-lg-5">
						<div className="single_service">
							<img src={service1} alt="service" />
							<div className="service_text">
								<h5>Accompagner le changement de modèle de cotisation</h5>
							</div>
							<div className="hr_line"></div>
						</div>

						<div className="single_service custom_margin">
							<img src={service3} alt="service" />
							<div className="service_text">
								<h5>Accompagner le changement de modèle de cotisation</h5>
							</div>
							<div className="hr_line"></div>
						</div>

						<div className="service_bullet_point_bottom">
							<div className="blue_dot"></div>
							<h5>voir nos cas client</h5>
						</div>
					</div>

					<div className="col-lg-6 col-12 order-first order-lg-last ps-lg-5">
						<div className="services_right_heading">
							<h1>ça donne quoi ?</h1>
						</div>

						<div className="single_service custom_margin">
							<img src={service2} alt="service" />
							<div className="service_text">
								<h5>Accompagner le changement de modèle de cotisation</h5>
							</div>
							<div className="hr_line"></div>
						</div>

						<div className="single_service custom_margin">
							<img src={service4} alt="service" />
							<div className="service_text">
								<h5>Accompagner le changement de modèle de cotisation</h5>
							</div>
							<div className="hr_line"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
