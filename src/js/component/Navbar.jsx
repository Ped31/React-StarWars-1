import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

function Navbar() {
	const [dropdown, setDropdown] = useState(false);
	const openCloseDrop = () => {
		setDropdown(!dropdown);
	};
	const { store, actions } = useContext(Context);
	return (
		<div className="row navbar">
			<nav className="navbar navbar-dark bg-black">
				<Link to="/">
					<img
						src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg"
						className="logo"
					/>
				</Link>
				<div className="dropdown justify-content-end">
					<Dropdown isOpen={dropdown} toggle={openCloseDrop}>
						<DropdownToggle className="boton" caret>
							Favorites
							{store.favorites.length}
						</DropdownToggle>
						<DropdownMenu>
							{store.favorites.length == 0 ? (
								<DropdownItem>(empty)</DropdownItem>
							) : (
								store.favorites.map((favorite, key) => {
									return (
										<DropdownItem key={key}>
											{favorite}
											<i
												className="fas fa-times"
												onClick={() => {
													actions.removeFav(favorite.id);
												}}
											/>
										</DropdownItem>
									);
								})
							)}
						</DropdownMenu>
					</Dropdown>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
