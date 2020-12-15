import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Navbar from "../component/Navbar.jsx";
import "../../styles/detail.css";

function People(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="detail-people">
			<div className="cointainer-fluid">
				<div className="row">
					<div className="col-6">
						<img
							src="https://www.teahub.io/photos/full/55-558357_star-wars-yoda-hd.jpg"
							className="card-img-top"
						/>
					</div>
					<div className="col-6 text">
						<h1 className="title">{store.moreDetail.name}</h1>
						<p>
							He recorrido esta galaxia de un extremo a otro, he visto cosas muy raras, pero nunca vi nada
							que me impulsara a creer que haya una única fuerza poderosa que lo controla todo. Ningún
							campo de energía mística controla mi destino. Todo eso no son más que leyendas y tonterías.
							Transmite lo que has aprendido: fuerza, maestría; pero insensatez, debilidad, fracaso
							también. ¡Sí, fracaso sobre todo! El mejor profesor, el fracaso es. Somos lo que ellos
							alcanzan, esa es la verdadera carga de todos los maestros El miedo es el camino hacia el
							Lado Oscuro. El miedo lleva a la ira, la ira lleva al odio, el odio lleva al sufrimiento.
							Percibo mucho miedo en ti El apego está prohibido, la posesión esta prohibida, la compasión,
							por contra, que para mí no sería sino el amor incondicional es primordial en la vida de un
							jedi. Así que podría decirse que se nos alienta a amar
						</p>
					</div>
				</div>
				<hr className="sep" />
				<div className="row more-details">
					<div className="col">
						<p>Name</p>
						<p>{store.moreDetail.name}</p>
					</div>
					<div className="col">
						<p>Birth Year</p>
						<p>{store.moreDetail.birth_year}</p>
					</div>
					<div className="col">
						<p>Gender</p>
						<p>{store.moreDetail.gender}</p>
					</div>
					<div className="col">
						<p>Height</p>
						<p>{store.moreDetail.height}</p>
					</div>
					<div className="col">
						<p>Skin Color</p>
						<p>{store.moreDetail.skin_color}</p>
					</div>
					<div className="col">
						<p>Eye Color</p>
						<p>{store.moreDetail.eye_color}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default People;
