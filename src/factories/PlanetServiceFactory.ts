import {PlanetService} from "../services/PlanetService";
import {ConnectionFactory} from "./ConnectionFactory";
import {StarWarsApiExternaService} from "../services/StarWarsApiExternaService";

export class PlanetServiceFactory {

    public static createPlanetService(): PlanetService
    {
        (new ConnectionFactory()).createConnection();
        return new PlanetService(new StarWarsApiExternaService());
    }
}
