const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const { DiscordTogether } = require('../index');

client.discordTogether = new DiscordTogether(client);

client.on('messageCreate', async message => {
    if (message.content === 'start') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
                return message.channel.send(`${invite.code}`); // Mavi bağlantıya tıklayın!
            });
        };
    };
});

client.login('Discord bot Tokeniniz');