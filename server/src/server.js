const http = require('http');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlantsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

// added express as middleware to http server
const server = http.createServer(app);

async function startServer() {
	await mongoConnect();
	await loadPlantsData();
	await loadLaunchData();
	server.listen(PORT, () => {
		console.log(`Server is listening on port ${PORT}`);
	});
}
startServer();
