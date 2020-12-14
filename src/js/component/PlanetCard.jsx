import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/Card.css";
import { Link } from "react-router-dom";

function PlanetCard(props) {
	const { store, actions } = useContext(Context);
	console.log(props);
	return (
		<div className="card">
			<img
				src="https://www.wallpapertip.com/wmimgs/42-420162_star-wars-kepler-16b-tatooine-taman-tasik-titiwangsa.jpg"
				className="card-img-top"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					{props.subtitle1}
					{props.text1}
				</p>
				<p className="card-text">
					{props.subtitle2}
					{props.text2}
				</p>
				<p className="card-text">
					{props.subtitle3}
					{props.text3}
				</p>
				<div className="row">
					<Link to="/planets">
						<button className="btn1 btn-primary" onClick={() => actions.moreDetails(props.str, props.id)}>
							Learn More!
						</button>
					</Link>
					<button
						type="button"
						className="btn2 btn-warning"
						onClick={() => actions.addTofavorites(props.name)}>
						{store.favorites.includes(props.name) ? (
							<i className="far fa-heart" />
						) : (
							<i className="fas fa-heart" />
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

PlanetCard.propTypes = {
	name: PropTypes.string,
	subtitle1: PropTypes.string,
	subtitle2: PropTypes.string,
	subtitle3: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	text3: PropTypes.string,
	str: PropTypes.string,
	id: PropTypes.number
};

export default PlanetCard;
