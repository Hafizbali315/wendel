const Menu = ({ setShowMenu }) => {
	return (
		<div className="menu_overlay">
			<ul>
				<li className="active">accueil</li>
				<li>expertises</li>
				<li>approache</li>
				<li>projets</li>
				<li>contact</li>
			</ul>

			<span className="close_btn" onClick={() => setShowMenu(false)}>
				X
			</span>
		</div>
	)
}

export default Menu
