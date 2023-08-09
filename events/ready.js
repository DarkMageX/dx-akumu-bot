const { ActivityType } = require("discord.js");
const mongoose = require('mongoose');
const dbURL = process.env.database;

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		const connectDB = async () => {
			try {
			  const conn = await mongoose.connect(process.env.MONGO_URI);
			  console.log(`MongoDB Connected: ${conn.connection.host}`);
			} catch (error) {
			  console.log(error);
			  process.exit(1);
			}
		  }
		  app.all('*', (req,res) => {
			  res.json({"every thing":"is awesome"})
		  })
		  connectDB().then(() => {
			  app.listen(PORT, () => {
				  console.log("Listening for MongoDB requests");
			  })
		  })
		console.log("Entering DarkMage's Dystopian World");
		client.user.setPresence({
			activities: [{ name: `over DarkMageX's Corrupted Realm`, type: ActivityType.Watching}],
			status: 'dnd',
			});
	},
};