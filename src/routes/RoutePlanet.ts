import {Request, Response} from "express";
import * as core from "express-serve-static-core";

import {PlanetControllerFactory} from "../factories/PlanetControllerFactory";

export class RoutePlanet {
    private _app: core.Express;

    constructor(app: core.Express){
        this._app = app;
    }

    public routes(): void {
        this._app.get('/', (req: Request, res: Response) => {
                res.status(200).send({
                    apk: Date.now()
                })
            });

        this._app.route('/create')
            .post((req: Request, res: Response) => {
                PlanetControllerFactory.createPlanetController().create(req, res);
            });

        this._app.route('/find/:id')
            .get((req: Request, res: Response) => {
                PlanetControllerFactory.createPlanetController().find(req, res);
            });

        this._app.route('/find-by-name/:name')
            .get((req: Request, res: Response) => {
                PlanetControllerFactory.createPlanetController().findByName(req, res);
            });

        this._app.route('/find-all')
            .get((req: Request, res: Response) => {
                PlanetControllerFactory.createPlanetController().findAll(req, res);
            });

        this._app.route('/delete/:id')
            .get((req: Request, res: Response) => {
                PlanetControllerFactory.createPlanetController().delete(req, res);
            });
    }
}
