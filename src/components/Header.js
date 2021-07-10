import { useState } from 'react'
import Menu from './Menu'

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)
	return (
		<div className="container header">
			<div className="my-5 row" style={{ alignItems: 'center' }}>
				<div className="col-6">
					<div className="logo">
						<p>we</p>
						<p>think</p>
						<p>elastic</p>
					</div>
				</div>
				<div className="col-6">
					<div className="menu_button" onClick={() => setShowMenu(true)}>
						<h6>menu</h6>
						<span className="red_dot"></span>
					</div>
				</div>
			</div>

			{showMenu && <Menu setShowMenu={setShowMenu} />}
		</div>
	)
}

export default Header
