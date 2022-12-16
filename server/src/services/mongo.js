const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

const MONGO_URL = process.env.MONGO_URL;
mongoose.connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});
mongoose.connection.on('error', (err) => {
	console.error(`MongoDB connection error: ${err}`);
});

async function mongoConnect() {
	await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
	await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
