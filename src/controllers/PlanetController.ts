import { Request, Response } from 'express';

import {PlanetService} from "../services/PlanetService";

export class PlanetController {

    public _planetService: PlanetService;

    constructor(planetService: PlanetService) {
        this._planetService = planetService;
    }

    public create(request: Request, response: Response) {
        this._planetService.create(request.body).then(() => {
           return response.status(201).send();
        }).catch((error) => {
           return response.status(500).send(error);
        });
    }

    public find(request: Request, response: Response) {
        let promise = this._planetService.find(request.params.id);

        if(promise === null){
            response.status(404).json({message:'id incompatível'});
            return;
        }

        promise.then((planet) => {
            return response.status(200).send(planet);
        }).catch((error) => {
            return response.status(500).send(error);
        });
    }

    public findByName(request: Request, response: Response) {
        this._planetService.findBy({nome: request.params.name})
            .then((planet) => {
                return response.status(200).send(planet);
            })
            .catch((error) => {
                return response.status(500).send(error);
            });
    }

    public findAll(request: Request, response: Response) {
        this._planetService.findAll()
            .then((planetList) => {
                return response.status(200).send(planetList);
            })
            .catch((error) => {
                return response.status(500).send(error);
            });
    }

    public delete (request: Request, response: Response) {
        this._planetService.delete(request.params.id)
            .then((planet) => {
                if(planet === null) {
                    return response.status(404).json({message: 'Não foi encontrado o planeta'});
                }
            })
            .then(() => {
                return response.status(202).send();
            })
            .catch((error) => {
                return response.status(500).send(error);
            });
    }
}
