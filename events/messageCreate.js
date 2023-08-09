const levelSchema = require("./Schemas.js/level");

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (!message.guild || message.author.bot) return;


        if (!usedXp.has(message.author.id)) {
            const levelRoles = [
                "773788433847681044",
                "773788628978761758",
                "773789006000553984"
            ];
            const ascendLevels = [1, 6, 11];

            levelSchema.findOne({ GuildID: message.guildId, UserID: message.author.id }), async (err, data) => {
                if (err) throw err;
                if (!data) {
                    levelSchema.create({
                        GuildID: message.guildId,
                        UserID: message.author.id,
                        Level: 0,
                        XP: 0,
                    })
                }
            };

            const data = await levelSchema.findOne({ GuildID: message.guildId, UserID: message.author.id });

            if (!data) return;

            const requiredXP = data.Level * 150 + 150;

            if (data.XP + 10 > requiredXP) {
                data.XP += 10;
                data.Level += 1;
                await data.save();
                message.author.send(`Congratulations, ${message.author}! Your Dark Energy level has reached level ${data.Level}!`);
                for (let i = 0; i < ascendLevels.length; i++) {
                    if (parseInt(data.Level) = ascendLevels[i]){
                        message.member.roles.add(levelRoles[i]);
                        if(i > 0){
                            message.member.roles.remove(levelRoles[i - 1]);
                        };
                        message.author.send(`You have reached Prestige Level ${i + 1}. Check the "level-unlocks" channel to see what you have unlocked!`)
                    };
                }
            } else {
                data.XP += 10;
                data.save();
            };

            usedXp.add(message.author.id);
            setTimeout(() => {
                usedXp.delete(message.author.id);
            }, 60000);

        }
    }
};