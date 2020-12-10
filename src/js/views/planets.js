import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Navbar from "../component/Navbar.jsx";
import "../../styles/detail.css";

function Planet(planets) {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadingData("planets");
		actions.loadingData("people");
	}, []);

	return (
		<div className="detail-planets">
			<Navbar />
			<div className="cointainer-fluid">
				<div className="row">
					<div className="col-6">
						<img
							src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
							className="card-img-top"
						/>
					</div>
					<div className="col-6 text">
						<h1 className="title">{planets.name}</h1>
						<p>
							LA VENGANZA DEL SITH ¡Guerra! La República se derrumba bajo los ataques del despiadado Señor
							Sith, el Conde Dooku. Hay héroes en ambos bandos. El mal está en todas partes. En una
							sorprendente maniobra, el malvado líder de los androides, el General Grievous, ha entrado en
							la Capital de la República y secuestrado al Canciller Palpatine, el líder del Senado
							Galáctico. Mientras el Ejército Separatista Androide intenta huir de la capital sitiada con
							su valioso rehen, dos Caballeros Jedi dirigen una misión desesperada para rescatar al
							Canciller cautivo…La fuerza es intensa en él. Thoper Grace demostró sus habilidades en
							edición de video, además de su conocimiento en Star Wars, para condensar todos los filmes en
							un pequeño de resumen de poco más de cinco minutos
						</p>
					</div>
				</div>
				<hr className="sep" />
				<div className="row more-details">
					<div className="col">
						<p>Name</p>
						<p>{planets.name}</p>
					</div>
					<div className="col">
						<p>Climate</p>
						<p>{planets.climate}</p>
					</div>
					<div className="col">
						<p>Population</p>
						<p>{planets.population}</p>
					</div>
					<div className="col">
						<p>Orbital Period</p>
						<p>{planets.orbital_period}</p>
					</div>
					<div className="col">
						<p>Rotation Period</p>
						<p>{planets.rotation_period}</p>
					</div>
					<div className="col">
						<p>Diameter</p>
						<p>{planets.diameter}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Planet;
