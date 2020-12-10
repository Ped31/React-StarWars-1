const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: []
		},
		actions: {
			loadingData: str => {
				fetch("https://swapi.dev/api/" + str + "/") //con esto hacemos la petición a la API
					.then(res => res.json()) //si la petición se resuelve de manera correcta, accede aqui. el .json es para pasar la respuesta a un formato que pueda ser leido por JS
					.then(data => {
						console.log(str);
						setStore({ [str]: data.results });
					}) //respuesta que me dio el backend ya convertida a una estructura a la cual js puede acceder
					.catch(error => console.log(error)); //en caso de que la promesa no se resuelva de manera correcta, ataja el error!
			}
		}
	};
};

export default getState;
