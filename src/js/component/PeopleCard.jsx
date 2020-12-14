import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/Card.css";
import { Link } from "react-router-dom";

function PeopleCard(props) {
	const { store, actions } = useContext(Context);
	return (
		<div className="card">
			<img
				src="https://static.emisorasunidas.com/uploads/2019/12/Yoda.jpg"
				className="card-img-top"
				alt="profile image"
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
					<Link to="/people">
						<button className="btn1 btn-primary">Learn More!</button>
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

PeopleCard.propTypes = {
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

export default PeopleCard;
