const fetch = require('node-fetch');
const { Client } = require('discord.js');

const defaultApplications = {
    'youtube':     '755600276941176913', // Not : YouTube ID'sini aldığım Snowflake sayesinde
    'poker':       '755827207812677713',
    'betrayal':    '773336526917861400',
    'fishing':     '814288819477020702',
    'chessdev':    '832012586023256104', // Not : ChessDev'i sunan ilk paket, bunu sunan diğer tüm paketler açıkça ondan ilham alacaktır.
    'chess':       '832012774040141894', // Not : Satrancı sunan ilk paket, onu sunan diğer tüm paketler açıkça ondan ilham alacaktır.
    // 'zombsroyale': '519338998791929866'  // Not : ZombsRoyake.Io'yu sunan ilk paket, ZombsRoyale.io ID'sini aldığım https://github.com/LilDerp-IsBetter sayesinde, onu sunan diğer tüm paketler açıkça ondan ilham alacaktır.
};


/**
 * Class symbolizing a YoutubeTogether
 * @template {Object.<string, string>} T
 */
class DiscordTogether {
    /**
     * Create a new YoutubeTogether
     * @param {Client} client Discord.Client
     * @param {T} applications
     * @example
     * const Discord = require('discord.js');
     * const client = new Discord.Client();
     * const { DiscordTogether } = require('discord-together');
     *
     * client.discordTogether = new DiscordTogether(client);
     *
     * client.on('message', async message => {
     *      if (message.content === 'start') {
     *          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
     *              return message.channel.send(`${invite.code}`);
     *           });
     *      };
     * });
     *
     * client.login('your token');
     */
    constructor(client, applications = defaultApplications) {
        if (!client) throw new SyntaxError('Geçersiz Discord.Client !');

        /**
         * Discord.Client
         */
        this.client = client;
        this.applications = { ...defaultApplications, ...applications };
    };

    /**
     * Create a Youtube Together invite code (note: send the invite using markdown link)
     * @param {string} voiceChannelId 
     * @param {keyof (defaultApplications & T)} option
     * @example
     * client.on('message', async message => {
     *      if (message.content === 'start') {
     *          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
     *              return message.channel.send(`${invite.code}`); // Click the blue link
     *           });
     *      };
     * });
     */
    async createTogetherCode(voiceChannelId, option) {
        /**
         * @param {string} code The invite link (only use the blue link)
         */
        let returnData = {
            code: 'Yok'
        };
        if (option && this.applications[option.toLowerCase()]) {
            let applicationID = this.applications[option.toLowerCase()];
            try {
                await fetch(`https://discord.com/api/v8/channels/${voiceChannelId}/invites`, {
                    method: 'POST',
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: applicationID,
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        'Authorization': `Bot ${this.client.token}`,
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                    .then(invite => {
                        if (invite.error || !invite.code) throw new Error('Veri alınırken bir hata oluştu!');
                        if(invite.code === 50013 || invite.code === '50013') console.warn('Botunuzun bu eylemi gerçekleştirme izni yok')
                        returnData.code = `https://discord.com/invite/${invite.code}`
                    })
            } catch (err) {
                throw new Error('Youtubeu birlikte başlatırken bir hata oluştu!');
            }
            return returnData;
        } else {
            throw new SyntaxError('Geçersiz seçenek!');
        }
    };
};

module.exports = DiscordTogether;