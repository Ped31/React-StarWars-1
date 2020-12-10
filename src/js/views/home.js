import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbar from "../component/Navbar.jsx";
import PeopleCard from "../component/PeopleCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";

//Styles:
import "../../styles/home.scss";

function Home() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadingData("planets");
		actions.loadingData("people");
	}, []);

	return (
		<div className="StarWarsApp">
			<Navbar />
			<div className="characters">
				<h1>Characters</h1>
				<div className="container-fluid">
					<div className="row people principal">
						{store.people.map((people, index) => {
							return (
								<PeopleCard
									key={index}
									name={people.name}
									subtitle1={"Gender: "}
									subtitle2={"Eye Color: "}
									subtitle3={"Hair Color: "}
									text1={people.gender}
									text2={people.eye_color}
									text3={people.hair_color}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className="planets">
				<h1>Planets</h1>
				<div className-="container-flluid">
					<div className="row planets principal">
						{store.planets.map((planets, index) => {
							return (
								<PlanetCard
									key={index}
									name={planets.name}
									subtitle1={"Population: "}
									subtitle2={"Terrain: "}
									text1={planets.population}
									text2={planets.terrain}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
