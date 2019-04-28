import {PlanetController} from "../controllers/PlanetController";
import {PlanetServiceFactory} from "./PlanetServiceFactory";

export class PlanetControllerFactory {

    public static createPlanetController(): PlanetController
    {
        return new PlanetController(PlanetServiceFactory.createPlanetService());
    }
}
