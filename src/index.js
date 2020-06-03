import Server from './Server';

const init = () => {
    const port = process.env.PORT || 3213;
    const server = new Server(port);

    server.start();
};

init();