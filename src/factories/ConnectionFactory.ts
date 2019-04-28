import * as mongoose from 'mongoose';

export class ConnectionFactory {

    private _connection: string = 'mongodb://localhost/StarWarsPlanet';

    public createConnection()
    {
        mongoose.connect(this._connection, {useNewUrlParser: true});
    }
}
