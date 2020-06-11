import http from 'http';
import App from './App';

class Server {
    constructor(port) {
        this._port = port;
        this._app = new App();
        this._server = http.createServer(null, this._app.getApp());
    }

    start = () => {
        console.log('...STARTING SERVER ON PORT ', this._port);
        this._server.listen(this._port);
    }
}

export default Server;