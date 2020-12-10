import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbar from "../component/Navbar.jsx";

//Styles:
import "../../styles/home.scss";

function Home() {
    const { store, actions } = useContext(Context);

    useEffect(() => {
		actions.loadingData("planets");
		actions.loadingData("people");
    }, []);
    
    return(
        <div className="StarWarsApp">
            <Navbar />
            <div className="characters">
                <h1>Characters</h1>
                <div className="container-fluid">
                    <div className="row people principal">
                        {store.people.map((people, index) => {
                            return(
                                <div key={index}>
                                <div className="card">
                                    <img
				                    src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/02/Especies_Star_Wars.jpg?itok=EExC_Bfw"
				                    className="card-img-top"/>
                                    <div className="card-body">
                                      <h5 className="card-title">{people.name}</h5>
                                        <p className="card-text">
                                            Gender:{people.gender}                                           
				                        </p>
                                        <p className="card-text">
                                            Hair color:{people.hair_color}
                                        </p>
                                        <p className="card-text">
                                            Eye color:{people.eye_color}
                                        </p>
                                        <div className="row buttons">
                                            <button type="button" className="btn btn-primary">
						                        Learn More
					                        </button>
					                        <button type="button" className="btn btn-warning">
						                        <i className="fas fa-heart" />
					                        </button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            );
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
	