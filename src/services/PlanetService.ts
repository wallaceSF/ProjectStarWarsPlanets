import {Promise} from "mongoose";

import Planet from "../models/Planet";
import {IPlanet} from "../interfaces/IPlanet";
import {StarWarsApiExternaService} from "./StarWarsApiExternaService";

export class PlanetService {
    private _starWarsApiExternaService: StarWarsApiExternaService;

    constructor(starWarsApiExternaService: StarWarsApiExternaService) {
        this._starWarsApiExternaService = starWarsApiExternaService;
    }

    public create = (planetObject: IPlanet): Promise<IPlanet> => {
        let planetPromises = this._starWarsApiExternaService.getNumberAppearancesPlanetsByName(planetObject.nome);

        return planetPromises.then((numberPlanets) => {

            if(numberPlanets === null){
                throw { message: "Quantidade de aparições não foi encontrado ou esse planeta não existe" };
            }

            planetObject['quantidadeDeAparicoes'] = numberPlanets;
            return Planet.create(planetObject)
        });
    };

    public find = (id): Promise<IPlanet|null> => {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return null;
        }

        let query = Planet.findById(id);
        return query.exec();
    };

    public findBy = (objectFind): Promise<IPlanet[]> => {
        let query = Planet.find(objectFind);
        return query.exec();
    };

    public findAll = (): Promise<IPlanet[]> => {
        let query = Planet.find({});
        return query.exec();
    };

    public delete = (id): Promise<IPlanet> => {
        let query = Planet.findOneAndDelete({'_id': id});
        return query.exec();
    };
}
