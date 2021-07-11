const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<h6>Vous avez un projet ?</h6>
						<h6>Vous souhaitez nous rejoindre ?</h6>
						<h4>uncafe@wethinkelastic.com</h4>
					</div>
					<div className="col-lg-5">
						<p>we think elastic</p>
						<p>9, boulevard de Belleville</p>
						<p>75011, Paris</p>
						<br />
						<p>Tel: 01 71 11 35 46</p>
					</div>
				</div>

				<div className="row mt-4 pb-3">
					<div className="col-lg-4">
						<span style={{ textDecoration: 'underline' }}>Agrément crédit impôt innovation</span>
					</div>
					<div className="col-lg-4 mt-lg-0 mt-3">
						<span style={{ textDecoration: 'underline' }}>Mentions légales</span>
					</div>
					<div className="col-lg-4 mt-lg-0 mt-3">
						<span>© 2020 wethinkelastic</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
