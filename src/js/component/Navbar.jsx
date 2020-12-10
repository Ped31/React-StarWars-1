import React, { useState } from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

function Navbar() {
	const [dropdown, setDropdown] = useState(false);
	const openCloseDrop = () => {
		setDropdown(!dropdown);
	};
	return (
		<div className="row navbar">
			<nav className="navbar navbar-dark bg-black">
				<Link to="/">
					<img
						src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg"
						className="logo"
					/>
				</Link>
				<div className="dropdown">
					<Dropdown isOpen={dropdown} toggle={openCloseDrop}>
						<DropdownToggle caret className="dropdown-menu">
							Favorites
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem>ITem 1</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
