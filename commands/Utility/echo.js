const { SlashCommandBuilder, Message } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Checks latency.'),
	async execute(interaction,client) {
        var ping = new Date().getTime() - interaction.createdTimestamp
		await interaction.reply(`Echo! Latency: ${ping} ms`);
	},
};