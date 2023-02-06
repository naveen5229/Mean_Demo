const http = require('http'),
_PORT_ = process.env.PORT || 8000,
mongoose = require('mongoose');
MONGO_URL = `mongodb+srv://navdarsh:Navdarsh123@warehouseclutser.fhxqyhp.mongodb.net/?retryWrites=true&w=majority`;
APP = require('./app');

const server = http.createServer(APP);
// const { loadDetail } = require('./models/profile.model');

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!!')
});

mongoose.connection.on('error', (err) => {
    console.error(err);
})

async function startServer(){
    await mongoose.connect(MONGO_URL);
    // await loadDetail();
    server.listen(_PORT_, () => {
    console.log(`Server is running at ${_PORT_}`);
    });
}

startServer();