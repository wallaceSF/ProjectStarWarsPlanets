import * as superagent from "superagent";

export class StarWarsApiExternaService {

    public _endPoint: string = 'http://swapi.co/api';

    getNumberAppearancesPlanetsByName(namePlanet: string, format: string = 'json'): Promise<number|null> {
        let promise = superagent.get(`${this._endPoint}/planets/?format=${format}`);

        return promise.then((response)=>{
            let planetList = response.body.results.find((planet) => {
                return planet.name === namePlanet;
            });

            if (planetList == undefined){
                return null;
            }

            return planetList.films.length;
        });
    }
}
