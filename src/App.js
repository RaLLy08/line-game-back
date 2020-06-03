import path from 'path';
import express from 'express';


class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.static(path.resolve(__dirname, '../public')));
        
        this._app.get('/getip', this.onGetIp);
    }

    onGetIp = (request, response) => {

        const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
        response.send(JSON.stringify({ip : ip}))

    }

    getApp = () => this._app;
}

export default App;