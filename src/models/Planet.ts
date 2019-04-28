import * as mongoose from 'mongoose';

import {IPlanet} from '../interfaces/IPlanet';

type PlanetType = IPlanet & mongoose.Document;
const PlanetSchema: mongoose.Schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: 'o nome é obrigatório'
        },
        clima: {
            type: String,
            required: 'o clima é obrigatório'
        },
        terreno: {
            type: String,
            required: 'o terreno é obrigatório'
        },
        quantidadeDeAparicoes: {
            type: String,
            required: 'a Quantidade de aparições é obrigatório'
        }
    }
);

export default mongoose.model<PlanetType>('Planet', PlanetSchema);



